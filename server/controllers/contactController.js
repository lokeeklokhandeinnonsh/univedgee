import validator from 'validator';
import ContactInquiry from '../models/ContactInquiry.js';
import { sendOwnerNotification, sendSenderAutoReply } from '../services/emailService.js';

export const createInquiry = async (req, res) => {
  try {
    let { firstName, lastName, email, company, lookingFor, message } = req.body;

    // 1. Check for required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (First name, Last name, Email, and Message).',
      });
    }

    // 2. Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid work email address.',
      });
    }

    // 3. Sanitize inputs (trim and escape HTML characters to prevent XSS)
    firstName = validator.escape(firstName.trim());
    lastName = validator.escape(lastName.trim());
    email = email.trim().toLowerCase();
    company = company ? validator.escape(company.trim()) : '';
    lookingFor = lookingFor ? validator.escape(lookingFor.trim()) : '';
    message = validator.escape(message.trim());

    // 4. Save to Database
    const newInquiry = await ContactInquiry.create({
      firstName,
      lastName,
      email,
      company,
      lookingFor,
      message,
    });

    // 5. Send Email Notifications (Background processes, don't block API response if they fail)
    // We send them, catch failures inside the services, and log them there.
    sendOwnerNotification({ firstName, lastName, email, company, lookingFor, message }).catch(err => 
      console.error('Owner notification deferred error:', err.message)
    );
    
    sendSenderAutoReply({ firstName, lastName, email, company, lookingFor, message }).catch(err => 
      console.error('Client auto-reply deferred error:', err.message)
    );

    // 6. Return response
    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. A senior consultant will respond within 4 business hours.',
      data: {
        id: newInquiry._id,
        firstName: newInquiry.firstName,
        lastName: newInquiry.lastName,
        createdAt: newInquiry.createdAt,
      },
    });

  } catch (error) {
    console.error('Inquiry submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. We were unable to submit your message. Please try again later.',
    });
  }
};

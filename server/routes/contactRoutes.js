import express from 'express';
import { createInquiry } from '../controllers/contactController.js';
import { contactFormLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// POST /api/contact - Create a contact inquiry (with rate limiting)
router.post('/', contactFormLimiter, createInquiry);

export default router;

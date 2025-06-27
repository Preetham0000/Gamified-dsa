import express from 'express';
import { getUserProgress } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);
router.post('/register', registerUser);
router.get('/:userId/progress', protect, getUserProgress);

export default router;

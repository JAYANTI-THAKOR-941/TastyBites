import express, { Router } from 'express';
import { createProduct, deleteProduct, getAllProduct, updateProduct } from '../controllers/productControllers.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.post('/create',upload.single('image'),createProduct);
router.put('/update/:id',upload.single('image'),updateProduct);
router.delete('/delete/:id',deleteProduct);
router.get('/all',getAllProduct);

export default router;
import express, { Router } from 'express';
import { createProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from '../controllers/productControllers.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.post('/create',upload.single('image'),createProduct);
router.put('/update/:id',upload.single('image'),updateProduct);
router.delete('/delete/:id',deleteProduct);
router.get('/all',getAllProduct);
router.get('/:id',getProductById);

export default router;

// http://localhost:8000/api/product/create
// http://localhost:8000/api/product/update/3257426349065
// http://localhost:8000/api/product/delete/3257426349065
// http://localhost:8000/api/product/all
// http://localhost:8000/api/product/3257426349065

import React, { useEffect, useState } from 'react'
import api from '../services/api';
import './admin.css';
import { useNavigate } from 'react-router-dom';

const ProductManagement = () => {


    const navigate = useNavigate();

    const [products,setProducts] = useState([]);

    const fetchProducts = async()=>{
        try{
            const res =  await api.get('/product/all');
            setProducts(res.data || []);
        
        }
        catch(error){
            console.log('Faild to fetch products.!',error)
          
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[])


    if(!products) return null;
  return (
    <div>
        <button className='add-btn' onClick={()=>navigate('/add-product')}>Add Product</button>
        <table>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Action</th>
            </tr>
            {
               products && products.map((p)=>(
                    <tr key={p._id}>
                        <td><img src={p.image} alt="" /></td>
                        <td>{p.title}</td>
                        <td>{p.description}</td>
                        <td>{p.price}</td>
                        <td>{p.category}</td>
                        <td className='btns-update'><button onClick={()=>navigate(`/edit/${p._id}`)} style={{backgroundColor:"green"}}>Edit</button><button onClick={()=>navigate(`/delete/${p.id}`)} style={{backgroundColor:"red"}}>Delete</button></td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default ProductManagement
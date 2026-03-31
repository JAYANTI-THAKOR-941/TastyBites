import React, { useEffect, useState } from 'react'
import api from '../services/api';

const ProductManagement = () => {

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
        <table>
            <tr>
                <th>Name</th>
            </tr>
            {
               products && products.map((p)=>(
                    <tr key={p.id}>
                        <td>{p.title}</td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default ProductManagement
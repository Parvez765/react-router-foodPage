import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';
import Swal from 'sweetalert2'

const Product = () => {
    const product = useLoaderData()
    console.log(product)

    const [order, setOrder] = useState([])
    const handleAddToCart = (newOrder) => {
        if (order) {
            let newItem = [...order, newOrder]
            console.log(order)
            setOrder(newItem)
}
    }
    

    const btnAlert = () => {
        if (order.length > 0) {
            Swal.fire(
                'Order Confirmed!',
                'Thanks For Checking Out',
                'success'
            )
        } else {
            alert ("You Have To Add One Food Item")
        }
    }

    return (
        <div>
            <h2 className='text-4xl font-bold mt-12'>Welcome To Our <br></br>Food Section</h2>
            <div className='grid grid-cols-4 gap-6'>
                 {
                product?.meals?.map(p => <SingleProduct
                    key={p.idMeal}
                    p={p}
                    order={order}
                    setOrder={setOrder}
                    handleAddToCart = {handleAddToCart}
                ></SingleProduct>)
           }
            </div>
            <div className='mt-16'>
                <h2 className='text-3xl font-semibold mb-6'>Order Details</h2>
               
                {
                    order.map(e => <li>{e}</li>)
                }
                <button className="btn mt-6" onClick={btnAlert}>CheckOut</button>
            </div>
        </div>
    );
};

export default Product;
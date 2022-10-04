import React from 'react';

const SingleProduct = ({ p, handleAddToCart}) => {
    const { strMeal, strCategory, strArea, strMealThumb, strTags} = p
    
    return (
       <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p className='text-left'>Catagory: {strCategory}</p>
                <p className='text-left'>Tags: {strTags? strTags : "No Tags Found"}</p>
                <p className='text-left'>Origin: {strArea? strArea : "No Origin Found"}</p>
                <button className="btn" onClick={()=> handleAddToCart(strMeal)}>Add To Cart</button>
            </div>
            <figure><img src={strMealThumb} alt="Shoes" /></figure>
        </div>
    );
};

export default SingleProduct;
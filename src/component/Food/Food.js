import React from 'react';

const Food = ({ food }) => {
    console.log(food)
    const {strMealThumb, strMeal, strCategory, strArea} = food
    return (
        <div>
             <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <p className='text-left'>{strCategory? strCategory : "No Information Found"}</p>
                    <p className='text-left'>{strArea? strArea : "No Information Found"}</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Food;
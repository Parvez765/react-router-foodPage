import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Card = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
            .then(res => res.json())
        .then(data => setFoods(data.meals))
    } ,[])
    return (
        <div>
            <h2 className='text-3xl mt-10 font-bold'>List of Food</h2>
            <div className='grid grid-cols-3 gap-6 mx-16 mt-8'>
                {
                foods.map(food => <Food
                    key={food.idMeal}
                    food = {food}
                ></Food>)
            }
            </div>
        </div>
    );
};

export default Card;
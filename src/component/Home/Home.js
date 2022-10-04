import React from 'react';
import headerImage from "../../images/headerFood.png"
import Card from '../Card/Card';
import Section from '../Section/Section';


const Home = () => {
    return (
        <div>
            <div className='flex items-center justify-evenly'>
                <div>
                <h2 className='text-5xl font-bold mb-6'>Lets's Have <br></br><span className='text-red-800'>Tasty Food</span></h2>
                <p className='mb-6'>Food is any substance consumed to provide nutritional<br></br> support for an organism. Food is usually of plant, animal, or fungal origin,<br></br> and contains essential nutrients</p>
                <button className="btn btn-secondary">Buy Now</button>
            </div>
            <div className='flex justify-end mr-10 mt-10 image'>
                 <img src={headerImage} alt=""></img>
            </div>
            </div>
            <Section></Section>
            <Card></Card>
        </div>
    );
};

export default Home;
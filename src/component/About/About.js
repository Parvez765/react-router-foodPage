import React from 'react';
import restaurants from "../../images/Restaurants-01.jpg"
import restaurantsImg from "../../images/Restaurants 2-01.jpg"
import rest from "../../images/Restaurants2-01.jpg"
import "./About.css"
const About = () => {
    return (
    <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                        <img src={restaurants} className="w-full" alt=""/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={restaurantsImg} className="w-full" alt=""/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                        <img src={rest} className="w-full" alt=""/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div> 
            <div className='bg-amber-200 p-11 mt-8 w-50'>
                <h1 className='text-5xl font-bold mt-12'>About Us</h1>
                <p className='mt-4 text-xl'>A restaurant is a business that prepares and serves food and drinks to customers.Meals are generally served and eaten on the premises, but many restaurants<br></br> also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and<br></br> service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.</p>
            </div>

            <div className='mt-12 text-3xl font-bold'>
                <h2 className='mb-10'>Satisfication Rate</h2>
                <div className="stats shadow">
  
                    <div className="stat">
                            <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-title">Total Visits</div>
                            <div className="stat-value text-primary">25.6K</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                        
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div className="stat-title">Page Views</div>
                            <div className="stat-value text-secondary">2.6M</div>
                            <div className="stat-desc">55% more than last month</div>
                        </div>
                        
                        <div className="stat">
                            
                            <div className="stat-value">86%</div>
                            <div className="stat-title">Review</div>
                            <div className="stat-desc text-secondary">32% more than last month</div>
                        </div>
                        </div>
            </div>
           
    </div>
    );
};

export default About;
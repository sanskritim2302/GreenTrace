import React from 'react';
import './About.css';
import About1 from '../utils/img/about1.png'
import About2 from '../utils/img/about2.png';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>


            <div className='container my-5'>
                <p className='about'>Welcome to GreenTrace, your ultimate destination for discovering eco-friendly and sustainable products from Indian brands. At GreenTrace, we believe in fostering a sustainable lifestyle by connecting consumers with locally sourced, environmentally conscious alternatives. Our platform curates a diverse range of products such as bags, cups, straws, and more, all meticulously selected from Indian brands committed to reducing environmental impact.</p>
            </div>
            <div className='products'>
                <div className='category'>
                    <div className='circle'></div>
                    <div className='content'>
                        <h2>Products Galore!</h2>
                        <p>Explore our range of eco-friendly products, featuring sustainable bags, cups, and straws from Indian brands.</p>
                     
                    </div>
                    <img src={About1} />
                </div>


                <div className='category'>
                    <div className='circle'></div>
                    <div className='content'>
                        <h2>Green Living</h2>
                        <p>Embrace a greener lifestyle and support local sustainability initiatives.</p>
                    </div>
                    <img src={About2} />
                </div>
            </div>

        </div>

    )
}

export default About;
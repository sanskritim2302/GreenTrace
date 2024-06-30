import React from 'react';
import { HomeBtn } from '../components/HomeBtn';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
    return (

        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h2 className='mb-0 text-black fw-bold'>Choose Green, Live Clean
                            </h2>
                            <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>Welcome to <span>GreenTrace</span></h1>
                            <p className='home-content'>Your Guide to Eco-Conscious Products</p>
                            <HomeBtn />
                        </div>
                    </div>
                </div>
            </header>

        </div>)
}




export default Home;
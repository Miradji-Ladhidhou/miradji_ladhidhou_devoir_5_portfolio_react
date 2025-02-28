import React from 'react';
import herobg from '../assets/images/hero-bg.jpg';

const Home = () => {
  return (
    <div className='div-heroBg'>
        <div className='dev-full'>
            <h1>Bonjour, je suis John Doe </h1>
            <h2>Développeur web full</h2>
            <button>En savoir plus</button>
        </div>
        <div className="hero">
            <img src={herobg} alt='hero bg'/>
        </div>
    </div>
    
  );
};

export default Home;

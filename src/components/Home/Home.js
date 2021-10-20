import React from 'react';
import Experts from './Experts/Experts';
import Hero from './Hero/Hero';
import Product from './Product/Product';
import Services from './Services/Services';



const Home = () => {
    return (
        <div id="home">
            <Hero></Hero>
            <Services></Services>
            <Product></Product>
            <Experts></Experts>

        </div>
    );
};

export default Home;












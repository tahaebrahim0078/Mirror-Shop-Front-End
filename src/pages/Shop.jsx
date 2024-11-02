import React from 'react';
import Hero from '../components/hero/Hero';
import Popular from '../components/popular/popular';
import Offiers from '../components/offiers/offiers';
import NewCollection from '../components/newCollection/newCollection';
import NewsLetter from '../components/NewsLetter/NewsLetter';


const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offiers/>
            <NewCollection/>
            <NewsLetter/>
            
        </div>
    );
}

export default Shop;

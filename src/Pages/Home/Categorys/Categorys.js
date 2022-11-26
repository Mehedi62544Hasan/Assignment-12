import React from 'react';
import Product from '../Product/Product';

const Categorys = () => {

    const categorys = [
        {
            "_id": 1,
            "category": "oppo",
            "img": "https://w0.peakpx.com/wallpaper/1/222/HD-wallpaper-oppo-violet-logo-violet-brickwall-oppo-logo-brands-oppo-neon-logo-oppo-thumbnail.jpg",
        },
        {
            "_id": 2,
            "category": "apple",
            "img": "https://media.gettyimages.com/id/1241013534/photo/apple-logo-at-an-apple-store-on-may-31-2022-in-berlin-germany.jpg?s=612x612&w=gi&k=20&c=Dj6QboW0pHPRPLkwRfiAxV2O_tT9ECBQ5k2CJpHFxTQ=",
        },
        {
            "_id": 3,
            "category": "mi",
            "img": "https://www.xiaomidna.com/wp-content/uploads/2021/04/facts-about-xiaomi.jpg",
        } 
    ]

    return (
        <div className='grid gap-4 justify-center md:grid-cols-2 lg:grid-cols-3 mt-32'>
            {
                categorys.map(category => <Product
                    key={category._id}
                    product={category}
                ></Product>)
            }
        </div>
    );
};

export default Categorys;
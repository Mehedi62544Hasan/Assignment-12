 import React from 'react';
import { BsStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { category, img } = product  

    return (
        <Link to={`/products/${category}`}> 
            <div className="card w-96 bg-base-100 shadow-xl mt-12">
                <figure><img src={img} alt="Shoes" className='w-full h-80' /></figure>
                <div className="card-body">
                    <h2 className="card-title">Resale {category} Phone</h2>
                     <div className='flex'>
                        <p className='uppercase text-red-600 font-bold text-xl'>{category}</p>
                        <div className='flex text-yellow-400'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Product;

 
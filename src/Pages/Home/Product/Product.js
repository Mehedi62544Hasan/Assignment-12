import React from 'react';
import { BsStarFill } from "react-icons/bs";
 
const Product = ({product}) => {
    const {name, price, buy, img} = product

    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-12">
            <figure><img src={img} alt="Shoes" className='w-full h-80' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-red-600 font-bold text-xl mt-10'>$ {price}</p>
               <div className='flex'> 
               <p>New Price: <strike>{buy}</strike></p>
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
    );
};

export default Product;
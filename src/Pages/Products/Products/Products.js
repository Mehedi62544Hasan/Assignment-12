import React, { useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
 
const Products = () => {
    const [buyPhone, setBuyPhone] = useState({})
    const products = useLoaderData();


    return (
        <div>
            <div className='grid gap-4 justify-center md:grid-cols-2 lg:grid-cols-3 mt-16'>
                {
                    products.map(product => <ProductDetails
                        key={product._id}
                        product={product}
                         setBuyPhone={setBuyPhone}
                    ></ProductDetails>)
                }
            </div>
          {
            buyPhone &&
            <BookingModal
                buyPhone={buyPhone}
                setBuyPhone={setBuyPhone}
            ></BookingModal>
            }
        </div>
    );
};

export default Products;
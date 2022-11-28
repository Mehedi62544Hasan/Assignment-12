import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { HiShieldCheck } from "react-icons/hi";
import { CiNoWaitingSign } from "react-icons/ci";

const ProductDetails = ({ product, setBuyPhone  }) => {
    const { email, img, name, seller, location, used, time, price, buy, condition, phone, description } = product; 
    
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://resale-mobile-point-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const verify =  users.find(usr => usr.email === email);  

    return (
        <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                    <div className="flex justify-between">
                        {verify?.verify ? <HiShieldCheck className='text-green-600 mr-3 text-xl' /> : <CiNoWaitingSign className='text-red-600 mr-3 text-xl' /> }
                        <h2 className="font-semibold leading-none">{seller}</h2>
                    </div>
                </div>
                <div>
                    <p className="text-xs leading-none dark:text-gray-400">{location}</p>
                    <p className="text-xs leading-none dark:text-gray-400">{phone}</p>
                </div>
            </div>
            <img src={img} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
            <div className="p-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <span className="inline-block text-xs leading-none dark:text-gray-400">{time}</span>
                    </div>
                    <button type="button" title="Bookmark post" className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                        </svg>
                    </button>
                </div>
                <span className="text-base font-semibold">{name}</span>
                <p className="text-sm my-4">{description}</p>
                <p className="text-sm">Used: {used}</p>
                <p className="text-sm">Condition: {condition}</p> 

                <p className='text-red-500 text-xl font-bold ml-3 mt-3'>$ {price}</p>
                <div>
                    <div className='flex justify-between'>
                        <div>
                            <p className="text-sm"> <strike>{buy}</strike> (New price)</p>
                        </div>
                        <label
                            onClick={() => setBuyPhone(product)}
                            htmlFor="booking-modal"
                            className="btn btn-outline btn-sm btn-secondary mb-3 mr-4"
                        >Book now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
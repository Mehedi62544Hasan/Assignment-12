import React from 'react';
import Product from '../Product/Product';

const Categorys = () => {

    const categorys = [
        {
            "id": 1,
            "name": "Oppo F21 Pro 5G",
            "price": 15000,
            "buy": 28000,
            "img": "https://www.oppo.com/content/dam/oppo/product-asset-library/f/f21-pro-5g/v1/assets/images-design-lights1_mo-1.jpg.webp",
        },
        {
            "id": 2,
            "name": "iPhone 14 Pro Max",
            "price": 90000,
            "buy": 160000,
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqhog3tdRHMqjLcH0dFkKT-FX5XMfkYQBeA&usqp=CAU",
        },
        {
            "id": 3,
            "name": "Xiaomi Redmi Note 12 Pro",
            "price": 26000,
            "buy": 45000,
            "img": "https://tbazzar.com/wp-content/uploads/2021/11/xiaomi-redmi-note-12-pro-discovery-explorer-1.jpg",
        }
    ]

    return (
        <div className='grid gap-4 justify-center md:grid-cols-2 lg:grid-cols-3 mt-32'>
            {
                categorys.map(category => <Product
                    key={category.id}
                    product={category}
                ></Product>)
            }
        </div>
    );
};

export default Categorys;
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

 
    return (
        <div>
            {products.map(product => <p
                key={product._id}
            >{product.name}</p>)}
        </div>
    );
};

export default MyProducts;
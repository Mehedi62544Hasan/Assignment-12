import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2' 

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    }); 
    const myProducts = products.filter(product => product.email === user?.email);

    const handleDeleteProduct = id => {
        const proceed = window.confirm('are you want to delete products');
    if (proceed) {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Delete Product Successfull!',
                        'success'
                    )
                    refetch();
                }
            })
    }
}

 
    return (
        <div>
        <p className="text-xl font-bold text-center my-6">My Products</p>
         <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Photo</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Category</th>
                     </tr>
                </thead>
                <tbody>
                   {
                    myProducts.map( (product, i) =>  <tr
                    key={i}
                    >
                        <th>{i + 1}</th>
                        <td><img src={product.img} alt="" className='w-12 h-12 rounded-2xl' /></td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td><button onClick={() => handleDeleteProduct(product?._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                     </tr> )
                   } 
                </tbody>
            </table>
        </div>
       </div>
    );
};

export default MyProducts;
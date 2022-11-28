import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2' 

const AllBuyer = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const sellers = users.filter(user => user.role !== 'seller')

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Your Registretion Successfull!',
                        'success'
                    )
                    refetch();
                }
            })
    }

    return (
        <div> 
        <p className="text-xl font-bold text-center my-6">All Users</p>

        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                         <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((user, i) => <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td><img src={user.img} alt="" className='w-10 h-10 rounded-full' /></td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                             <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                        </tr>)
                    } 
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllBuyer;
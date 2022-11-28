import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loader/Loading';

const MyOrders = () => {

    const { user } = useContext(AuthContext); 

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
       <div>
        <p className="text-xl font-bold text-center my-6">My Orders</p>
         <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Photo</th>
                        <th>Phone Model</th>
                        <th>Price</th>
                     </tr>
                </thead>
                <tbody>
                   {
                    bookings.map( (booking, i) =>  <tr
                    key={i}
                    >
                        <th>{i + 1}</th>
                        <td><img src={booking.img} alt="" className='w-12 h-12 rounded-2xl' /></td>
                        <td>{booking.item}</td>
                        <td>{booking.price}</td>
                     </tr> )
                   } 
                </tbody>
            </table>
        </div>
       </div>
    );
};

export default MyOrders;
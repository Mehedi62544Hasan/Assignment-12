import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const BookingModal = ({ buyPhone, setBuyPhone }) => {

     const { img, name, price } = buyPhone;
     const { user } = useContext(AuthContext); 

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;

        const buyer = form.buyer.value;
        const email = form.email.value;
        const item = form.item.value;
        const price = form.price.value;
        const location = form.location.value;
         const phone = form.phone.value;

         const booking = {
            img,
             buyer,
             email,
            item,
            price,
            location,
            phone
        } 

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBuyPhone(null);
                    Swal.fire(
                        'Good job!',
                        'Your Login Successfull!',
                        'success'
                    )
                 }
                else{
                 }
            })
            .catch(error => console.error(error))


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="buyer" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="item" type="text" defaultValue={name} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="price" type="text" defaultValue={price} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Your location" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>  
        </>
    );
};

export default BookingModal;
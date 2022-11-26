import React from 'react';
 
const AddProduct = () => {

    // useTitle('Add Service')

    const handlePressOrder = event => {
        event.preventDefault();
        const form = event.target;

        const seller = form.seller.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const name = form.name.value;
        const price = form.price.value;
        const buy = form.buy.value;
        const used = form.used.value;
        const condition = form.condition.value;
        const category = form.category.value;
        const img = form.img.value;
        const time = form.time.value;
        const description = form.description.value;

 
        const addItem = {
            seller,
            phone,
            location,
            name,
            price,
            buy,
            used,
            condition,
            category,
            img,
            time,
            description
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItem)
        })
            .then(res => res.json())
            .then(data => {
                 if (data.acknowledged) {
                    form.reset()
                    alert('post successfully')
                }
            })


    }

    return (
        <div className='mt-14 mx-5'>
            <div className='font-bold text-xl lg:text-4xl flex justify-center mb-10'><span className='text-lime-500'>PLACE ADD</span><span className='text-red-500 ml-2'>PRODUCTS</span></div>
            <form onSubmit={handlePressOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="seller" type="text" placeholder="Your Name" className="input input-bordered input-secondary w-full" />
                    <input name="phone" type="text" placeholder="Your Phone Number" className="input input-bordered input-secondary w-full" />
                    <input name="location" type="text" placeholder="Your Location" className="input input-bordered input-secondary w-full" />
                    <input name="name" type="text" placeholder="Product Name" className="input input-bordered input-secondary w-full" />
                    <input name="price" type="text" placeholder="Product Price" className="input input-bordered input-secondary w-full" />
                    <input name="buy" type="text" placeholder="New Price" className="input input-bordered input-secondary w-full" />
                    <input name="used" type="text" placeholder="Used Day" className="input input-bordered input-secondary w-full" />
                    <input name="condition" type="text" placeholder="Product Condition" className="input input-bordered input-secondary w-full" />
                    <input name="category" type="text" placeholder="Product Category" className="input input-bordered input-secondary w-full" />
                    <input name="img" type="text" placeholder="Product ImageURL" className="input input-bordered input-secondary w-full" />
                    <input name="time" type="text" placeholder="Submit Time" className="input input-bordered input-secondary w-full" />
                </div>
                <textarea name="description" className="textarea textarea-secondary my-4 w-full" placeholder="description"></textarea>
                <input type="submit" value="Post" className='btn bg-blue-600 px-24' />
            </form>
        </div>
    );
};

export default AddProduct;
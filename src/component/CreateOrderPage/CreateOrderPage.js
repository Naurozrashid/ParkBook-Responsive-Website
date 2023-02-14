import React from 'react'
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import swal from 'sweetalert';

const CreateOrderPage = () => {
    const { slotID, totalCost, ArrTime, DepTime, ParkingNumber, ParkingZone } = useParams();
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        swal("Are you sure you want book this slot for parking?", {
            buttons: ["No", "Yes"],
        })
            .then((value) => {
                if (value) {

                    fetch('https://parkbook-server-side.onrender.com/allSlots/makeUnavailable', {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(res2 => {
                            console.log(data.slotID);
                            if (res2.modifiedCount) {
                                console.log("modified slot")
                            }
                            else {
                                console.log("error slot modified")
                            }
                        });






                    axios.post('https://parkbook-server-side.onrender.com/addorder', data)
                        .then(res => {
                            if (res.data.insertedId) {
                                swal({
                                    title: "Thank You",
                                    text: "Your booking is confirmed",
                                    icon: "success",
                                    button: "Done",
                                });
                            }
                            else {
                                swal("Sorry!", "Some Error occure", "error");
                            }
                        });
                }
            });


        handlePayment();

    }

    const handlePayment = () => {
        const info = {
            product_name: ParkingZone,
            product_category: ParkingNumber,
            total_amount: totalCost,
            cus_name: user?.displayName,
            cus_email: user?.email

        }
        fetch(`https://parkbook-server-side.onrender.com/init`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.replace(data)
            })

    }
    return (
        <div>
            <h2 className="text-center">Create Your Order</h2>

            <div className="container w-50">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input hidden type="text" value={totalCost}{...register("totalCost", { required: true })} />
                    <input hidden type="text" value={ArrTime} {...register("ArrTime", { required: true })} />
                    <input hidden type="text" value="Unpaid" {...register("Payment", { required: true })} />
                    <input hidden type="text" value={DepTime}  {...register("DepTime", { required: true })} />
                    <input hidden type="text" value={slotID}  {...register("slotID", { required: true })} />
                    <input hidden type="text" value={ParkingNumber}  {...register("ParkingNumber", { required: true })} />
                    <input hidden type="text" value={ParkingZone} {...register("ParkingZone", { required: true })} />
                    <input type="text" className="form-control m-2" placeholder="Enter Your Full Name" {...register("Fullname", { required: true })} />
                    <input type="text" className="form-control m-2" placeholder="Enter Phone Number" {...register("Mobile", { required: true })} />
                    <input readOnly className="form-control m-2" value={user.email || ' '}  {...register("userEmail", { required: true })} />
                    <input value="Order Now" className="btn fw-bold btn-success mt-3" type="submit" />
                </form>
            </div>






        </div>
    )
}

export default CreateOrderPage

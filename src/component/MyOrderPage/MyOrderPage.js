import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';
import SloatListCard from '../SloatListCard/SloatListCard';
import OrderCard from './OrderCard';

const MyOrderPage = () => {
    const [ord, setord] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/allorders')
            .then(res => res.json())
            .then(data => setord(data));
    }, [ord]);



    if (ord.length === 0) {
        return <div className="d-flex justify-content-center">
            <h1>Loading....</h1>
        </div>
    }


    return (
        <div>
            <h1 className='text-center'>My Orders</h1>

            <div className="container mb-5">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover border-dark">
                        <thead>
                            <tr className="text-center">
                                <th scope="col">ParkingZone</th>
                                <th scope="col">ParkingNumber</th>
                                <th scope="col">Arrival Time</th>
                                <th scope="col">Depture Time</th>
                                <th scope="col">Total Cost</th>
                                <th scope="col">Payment</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                ord.filter(order => order.userEmail.includes(user.email)).map(myOrder => (

                                    <OrderCard
                                        myOrder={myOrder}
                                        key={myOrder._id}
                                    >

                                    </OrderCard>


                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default MyOrderPage

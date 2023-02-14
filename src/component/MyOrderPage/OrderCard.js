import React, { useState } from 'react'
import swal from 'sweetalert';


const OrderCard = (props) => {
    const { _id, ParkingZone, ParkingNumber, totalCost, ArrTime, DepTime, slotID, Payment } = props.myOrder;
    const [ord, setord] = useState([]);
    let atime = new Date(parseFloat(ArrTime));
    let dtime = new Date(parseFloat(DepTime));

    const handleDeleteOrder = id => {
        const url = `https://parkbook-server-side.onrender.com/allorders/${id}`;

        swal("Are you sure you want Cancel this Order?", {
            buttons: ["No", "Yes"],
        })
            .then((value) => {
                if (value) {


                    fetch('https://parkbook-server-side.onrender.com/allSlots/makeAvailable', {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ slotID })
                    })
                        .then(res => res.json())
                        .then(res2 => {

                            if (res2.modifiedCount) {
                                console.log("modified slot")
                            }
                            else {
                                console.log("error slot modified")
                            }
                        });





                    fetch(url, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                swal("Deleted Successfull...", {
                                    icon: "success",
                                });
                                const remainingOrder = ord.filter(myOrder => myOrder._id !== id);
                                setord(remainingOrder);
                            }
                        });
                }
            });

    }
    return (

        < tr className="text-center" >
            <td>{ParkingZone}</td>
            <td>{ParkingNumber}</td>
            <td> {atime.getDate() +
                "/" + (atime.getMonth() + 1) +
                "/" + atime.getFullYear() +
                " " + atime.getHours() +
                ":" + atime.getMinutes()}</td>
            <td> {dtime.getDate() +
                "/" + (dtime.getMonth() + 1) +
                "/" + dtime.getFullYear() +
                " " + dtime.getHours() +
                ":" + dtime.getMinutes()}</td>
            <td>{totalCost}</td>
            <td>{Payment}</td>
            <td><button onClick={() => handleDeleteOrder(_id)} className="btn btn-danger">Cancel</button></td>
        </tr>
    )
}

export default OrderCard

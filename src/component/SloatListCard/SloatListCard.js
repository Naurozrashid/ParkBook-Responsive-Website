import React from 'react'
import { Link } from 'react-router-dom';

const SloatListCard = (props) => {
    const { _id, ParkingZone, ParkingNumber, Cost, DueTime } = props.slots;
    let totalParkHour = props.totalParkHour;
    let ArrTime = props.ArrTime;
    let DepTime = props.DepTime;
    let totalCost = (totalParkHour * Cost).toFixed(2);
    let date = new Date(DueTime);


    return (
        <>




            <tr>
                <td>{ParkingZone}</td>
                <td>{ParkingNumber}</td>
                <td>{Cost} Taka</td>
                <td>{totalCost} Taka</td>
                {

                    DueTime != "" ? (<td>
                        {date.getDate() +
                            "/" + (date.getMonth() + 1) +
                            "/" + date.getFullYear() +
                            " " + date.getHours() +
                            ":" + date.getMinutes()}
                    </td>) : (<td>
                        No Time
                    </td>)

                }
                <td>
                    <Link className="btn btn-info" to={`/CreateOrderPage/${_id}/${ArrTime}/${DepTime}/${totalCost}/${ParkingNumber}/${ParkingZone}`} >Book Now</Link>
                </td>
            </tr>




        </>
    )
}

export default SloatListCard

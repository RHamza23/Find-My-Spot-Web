import { collection, getDocs } from "firebase/firestore";

import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const VehicleTheft = () => {

    const [vehicleData, setVehicleData] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "Vehicle Theft"));
      const vehicleArray = [];
      querySnapshot.forEach((doc) => {
        vehicleArray.push(doc.data());
      });
      setVehicleData(vehicleArray);
    };
    getUsers();
  }, []);
  console.log(vehicleData);

  return (
    <>

      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h1 className="text-center mb-4 text-2xl font-semibold leading-tight">Vehicle Theft</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs border-2 border-blue-300">

            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="bg-blue-200">
              <tr className="text-center"> 
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Name</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">CNIC</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Date</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Vehicle No</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Vehicle Type</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Complain</th>
              </tr>
            </thead>
            <tbody>

            {vehicleData?.map((vehicle, index) => (

              <tr className="text-center bg-blue-100 hover:bg-blue-300 shadow-sm">
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {vehicle?.name}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {vehicle?.cnic}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {vehicle?.date}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {vehicle?.vehicle_no}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {vehicle?.vehicle_type}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {vehicle?.complain_description}
                </td>
              </tr>
              ))}

            </tbody>

          </table>
        </div>
      </div>

    </>
  )
}

export default VehicleTheft

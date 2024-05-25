import { collection, getDocs } from "firebase/firestore";

import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const ParkingManager = () => {

    const [userData, setUserData] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "Parking Manager"));
      const clientArray = [];
      querySnapshot.forEach((doc) => {
        clientArray.push(doc.data());
      });
      setUserData(clientArray);
    };
    getUsers();
  }, []);
  console.log(userData);

  return (
   <>
   <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h1 className="text-center mb-4 text-2xl font-semibold leading-tight">Parking Managers</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs border-2 border-blue-300">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="bg-yellow-200">
              <tr className="text-center"> 
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">I.D #</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Name</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Email</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Password</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Phone</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Location</th>
              </tr>
            </thead>
            <tbody>

            {userData?.map((parkingmanager, index) => (
              <tr className="text-center bg-yellow-100 hover:bg-blue-100 shadow-sm">
                <td className="py-3 px-6 tracking-wider text-sm font-bold text-gray-700">
                Parking Manager {index + 1} :
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {parkingmanager?.Name}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {parkingmanager?.Email}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {parkingmanager?.Password}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {parkingmanager?.Phone}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {parkingmanager?.Location}
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

export default ParkingManager

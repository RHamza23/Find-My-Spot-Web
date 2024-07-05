import { collection, getDocs } from "firebase/firestore";

import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const Clients = () => {
  
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "Client"));
      const clientArray = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        clientArray.push(doc.data());
      });
      setUserData(clientArray);
    };
    getUsers();
  }, []);
  console.log(userData);

  return (
    <>      
      {/* {userData?.map((client, index) => (
        <div key={client?.Id}>
          <h1>Client {index + 1} :</h1>
          <h3>{client?.Name}</h3>
          <p>{client?.Email}</p>
        </div>
      ))} */}

      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h1 className="text-center mb-4 text-2xl font-semibold leading-tight">Clients</h1>
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
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">I.D #</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Name</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Email</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Phone</th>
              </tr>
            </thead>
            <tbody>

            {userData?.map((client, index) => (
              <tr className="text-center bg-blue-100 hover:bg-blue-100 shadow-sm">
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  Client {index + 1} :
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {client?.Name}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {client?.Email}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {client?.Phone}
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Clients;

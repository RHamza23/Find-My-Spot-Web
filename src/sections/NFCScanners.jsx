import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const NFCScanners = () => {
  const [scannerData, setScannerData] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState({}); // To store selected statuses for each scanner

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Scanner Orders"));
      const scannerArray = [];
      querySnapshot.forEach((doc) => {
        scannerArray.push({ id: doc.id, ...doc.data() });
      });
      setScannerData(scannerArray);
    };
    fetchData();
  }, []);

  const entities = ['Confirm', 'Shipped', 'Deliver']; // Dropdown options

  const handleDropdownChange = (e, scannerId) => {
    setSelectedStatuses(prevState => ({
      ...prevState,
      [scannerId]: e.target.value // Update the selected status for this scanner
    }));
  };

  const handleUpdateEntity = async (scannerId) => {
    const selectedStatus = selectedStatuses[scannerId]; // Get the selected status for this scanner

    if (selectedStatus) {
      try {
        const scannerRef = doc(db, "Scanner Orders", scannerId); // Use correct collection and doc reference
        await updateDoc(scannerRef, { OrderStatus: selectedStatus });
        console.log('Entity updated successfully!');
        
        // Update the local state to reflect the change
        setScannerData(prevState =>
          prevState.map(scanner =>
            scanner.id === scannerId ? { ...scanner, OrderStatus: selectedStatus } : scanner
          )
        );
        setSelectedStatuses(prevState => ({ ...prevState, [scannerId]: '' })); // Clear selected status
      } catch (error) {
        console.error('Error updating entity:', error);
      }
    }
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-800">
      <h1 className="text-center mb-4 text-2xl font-semibold leading-tight">NFC Scanners</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs border-2 border-blue-300">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead className="bg-blue-200">
            <tr className="text-center">
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">
                Scanner I.D
              </th>
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">
                Phone
              </th>
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">
                Payment Method
              </th>
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">
                Shipment Address
              </th>
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">
                Implemented Address
              </th>
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">
                Order Status
              </th>
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">
                Update Status
              </th>
            </tr>
          </thead>
          <tbody>
            {scannerData.map((scanner) => (
              <tr className="text-center bg-blue-100 hover:bg-blue-100 shadow-sm" key={scanner.id}>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {scanner?.scannerData.scanner_id}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {scanner?.scannerData.phone_number}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {scanner?.scannerData.payment_method}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {scanner?.scannerData.shipment_address}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {scanner?.scannerData.implemented_address}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {scanner.OrderStatus} {/* Display the current status */}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  <select
                    className="py-2 px-2 rounded bg-blue-100 hover:bg-blue-300 shadow-sm outline-none border-2 border-indigo-600"
                    value={selectedStatuses[scanner.id] || ''}
                    onChange={(e) => handleDropdownChange(e, scanner.id)}
                  >
                    <option value="" disabled>Select Status</option>
                    {entities.map((entity) => (
                      <option className="text-black text-sm font-medium" key={entity} value={entity}>
                        {entity}
                      </option>
                    ))}
                  </select>
                  <button
                    className="ml-2 px-4 py-2 rounded-md bg-gray-800 text-white uppercase"
                    onClick={() => handleUpdateEntity(scanner.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NFCScanners;

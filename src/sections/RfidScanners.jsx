import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const RfidScanners = () => {

  const [scannerData, setScannerData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        collection(db, "Scanner Orders")
      );
      const scannerArray = [];
      querySnapshot.forEach((doc) => {
        scannerArray.push({ id: doc.id, ...doc.data() });
      });
      setScannerData(scannerArray);
    };
    fetchData();
  }, []);

  const [selectedValue, setSelectedValue] = useState('');
  const entities = ['Confirm', 'Shipped', 'Deliver']; // Dropdown options

  const handleDropdownChange = (e, scannerId) => {
    setSelectedValue(e.target.value);
    // Find the scanner with the given ID
    const selectedScanner = scannerData.find(scanner => scanner.id === scannerId);
    // Update the OrderStatus field of the selected scanner
    const updatedScanner = { ...selectedScanner, OrderStatus: e.target.value };
    // Update the scannerData state with the modified scanner
    setScannerData(prevState => {
      const updatedData = prevState.map(scanner => {
        if (scanner.id === scannerId) {
          return updatedScanner;
        }
        return scanner;
      });
      return updatedData;
    });
  };

  const handleUpdateEntity = async (scannerId) => {
    if (selectedValue) {
      try {
        const scannerRef = doc(db, "Admin", "Scanner Order", "Orders", scannerId);
        await updateDoc(scannerRef, { OrderStatus: selectedValue });
        console.log('Entity updated successfully!');
        setSelectedValue('');
      } catch (error) {
        console.error('Error updating entity:', error);
      }
    }
  };

  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h1 className="text-center mb-4 text-2xl font-semibold leading-tight">RFID Scanners</h1>
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
              {scannerData?.map((scanner, index) => (
                
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
                      <select className="py-2 px-2 rounded bg-blue-100 hover:bg-blue-300 shadow-sm outline-none border-2 border-indigo-600"
                          value={scanner.OrderStatus} onChange={(e) => handleDropdownChange(e, scanner.id)}>
                          <option value="" disabled>{scanner?.OrderStatus}</option>
                          {entities.map((entity) => (
                            <option className="text-black text-sm font-medium" key={entity} value={entity}>
                              {entity}
                            </option>
                          ))}
                      </select>
                  </td>
                  <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                    <button className="px-4 py-2 rounded-md bg-gray-800 text-white uppercase" 
                    onClick={() => handleUpdateEntity(scanner.id)}> Update </button>
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

export default RfidScanners;

import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const NFCCards = () => {
  const [cardData, setCardData] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState({}); // To store selected statuses for each card

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Card Orders"));
      const cardArray = [];
      querySnapshot.forEach((doc) => {
        cardArray.push({ id: doc.id, ...doc.data() });
      });
      setCardData(cardArray);
    };
    fetchData();
  }, []);

  const entities = ['Confirm', 'Shipped', 'Deliver']; // Dropdown options

  const handleDropdownChange = (e, cardId) => {
    setSelectedStatuses(prevState => ({
      ...prevState,
      [cardId]: e.target.value // Update the selected status for this card
    }));
  };

  const handleUpdateEntity = async (cardId) => {
    const selectedStatus = selectedStatuses[cardId]; // Get the selected status for this card

    if (selectedStatus) {
      try {
        const cardRef = doc(db, "Card Orders", cardId); // Use correct collection and doc reference
        await updateDoc(cardRef, { OrderStatus: selectedStatus });
        console.log('Entity updated successfully!');
        
        // Update the local state to reflect the change
        setCardData(prevState => 
          prevState.map(card => 
            card.id === cardId ? { ...card, OrderStatus: selectedStatus } : card
          )
        );
        setSelectedStatuses(prevState => ({ ...prevState, [cardId]: '' })); // Clear selected status
      } catch (error) {
        console.error('Error updating entity:', error);
      }
    }
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-800">
      <h1 className="text-center mb-4 text-2xl font-semibold leading-tight">NFC Cards</h1>
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
            <col />
            <col />
          </colgroup>
          <thead className="bg-blue-200">
            <tr className="text-center"> 
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Card I.D</th>
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Name</th>
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Email</th>
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Address</th>
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Phone</th>
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Valid Till</th>
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Vehicle No</th>
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Order Status</th>
              <th className="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Update Status</th>
            </tr>
          </thead>
          <tbody>
            {cardData.map((card) => (
              <tr className="text-center bg-blue-100 hover:bg-blue-100 shadow-sm" key={card.id}>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {card.id}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {card.orderData.name}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {card.orderData.email}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {card.orderData.address}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {card.orderData.phone_no}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {card.orderData.card_valid}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {card.orderData.vehicle_no}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {card.OrderStatus} {/* Display the current status */}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  <select
                    className="py-2 px-2 rounded bg-blue-100 hover:bg-blue-300 shadow-sm outline-none border-2 border-indigo-600"
                    value={selectedStatuses[card.id] || ''}
                    onChange={(e) => handleDropdownChange(e, card.id)}
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
                    onClick={() => handleUpdateEntity(card.id)}
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
}

export default NFCCards;

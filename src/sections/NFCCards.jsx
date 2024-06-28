import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const NFCCards = () => {
    
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        collection(db, "Card Orders")
      );
      const cardArray = [];
      querySnapshot.forEach((doc) => {
        cardArray.push({ id: doc.id, ...doc.data() });
      });
      setCardData(cardArray);
    };
    fetchData();
  }, []);

  const [selectedValue, setSelectedValue] = useState('');
  const entities = ['Confirm', 'Shipped', 'Deliver']; // Dropdown options

  const handleDropdownChange = (e, cardId) => {
    setSelectedValue(e.target.value);
    // Find the card with the given ID
    const selectedCard = cardData.find(card => card.id === cardId);
    // Update the OrderStatus field of the selected card
    const updatedCard = { ...selectedCard, OrderStatus: e.target.value };
    // Update the cardData state with the modified card
    setCardData(prevState => {
      const updatedData = prevState.map(card => {
        if (card.id === cardId) {
          return updatedCard;
        }
        return card;
      });
      return updatedData;
    });
  };

  const handleUpdateEntity = async (cardId) => {
    if (selectedValue) {
      try {
        const cardRef = doc(db, "Admin", "Cards Order", "Orders", cardId);
        await updateDoc(cardRef, { OrderStatus: selectedValue });
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
        <h1 className="text-center mb-4 text-2xl font-semibold leading-tight">NFC Cards</h1>
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

            {cardData?.map((card, index) => (

              <tr className="text-center bg-blue-100 hover:bg-blue-100 shadow-sm" key={card.id}>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                {card?.id}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {card?.orderData.name}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {card?.orderData.email}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {card?.orderData.address}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {card?.orderData.phone_no}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {card?.orderData.card_valid}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                  {card?.orderData.vehicle_no}
                </td>
                <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                      <select className="py-2 px-2 rounded bg-blue-100 hover:bg-blue-300 shadow-sm outline-none border-2 border-indigo-600"
                          value={card.order_status} onChange={(e) => handleDropdownChange(e, card.id)}>
                          <option value="" disabled>{card?.order_status}</option>
                          {entities.map((entity) => (
                            <option className="text-black text-sm font-medium" key={entity} value={entity}>
                              {entity}
                            </option>
                          ))}
                      </select>
                  </td>
                  <td className="py-3 px-6 tracking-wider text-sm font-medium text-gray-700">
                    <button className="px-4 py-2 rounded-md bg-gray-800 text-white uppercase" 
                    onClick={() => handleUpdateEntity(card.id)}> Update </button>
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

export default NFCCards

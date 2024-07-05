import React, { useState } from "react";
import ParkingManager from "./ParkingManager";
import Clients from "./Clients";
import NFCCards from "./NFCCards";
import NFCScanners from "./NFCScanners";
import VehicleTheft from "./VehicleTheft";

const AdminDashboard = () => {
  const [tab, setTab] = useState("Client");
  console.log(tab);
  function handleTab(event) {
    setTab(event.target.id);
  }
  return (
    <>
      <h1 className="pt-8 pb-6 text-3xl font-bold text-center">
        Admin Dashboard
      </h1>

        <div className="mt-6 mb-8 flex flex-row justify-center space-x-4">
            <button
              type="button"
              onClick={handleTab}
              id="Client"
              className="px-14 py-4 font-semibold rounded-md bg-gray-800 text-white"
            >
              Client
            </button>
            <button
              type="button"
              onClick={handleTab}
              id="Parking"
              className="px-6 py-4 font-semibold rounded-md bg-gray-800 text-white"
            >
              Parking Managers
            </button>
            <button
              type="button"
              onClick={handleTab}
              id="Cards"
              className="px-10 py-4 font-semibold rounded-md bg-gray-800 text-white"
            >
              NFC Cards
            </button>
            <button
              type="button"
              onClick={handleTab}
              id="Scanners"
              className="px-8 py-4 font-semibold rounded-md bg-gray-800 text-white"
            >
              NFC Scanners
            </button>
            <button
              type="button"
              onClick={handleTab}
              id="Theft"
              className="px-8 py-4 font-semibold rounded-md bg-gray-800 text-white"
            >
              Vehicle Theft
            </button>
        </div>
        
        <div>
          {tab === "Client"
            ? <Clients />
            : tab === "Parking"
            ? <ParkingManager />
            : tab === "Cards"
            ? <NFCCards />
            : tab === "Scanners"
            ? <NFCScanners />
            : <VehicleTheft />}
        </div>
    </>
  );
};

export default AdminDashboard;

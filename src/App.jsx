import { useEffect, useState } from 'react';
import './assets/fonts/fonts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './sections/Navbar';
import Home from './sections/Home';
import Contact from './sections/Contact';
import AdminLogin from './sections/AdminLogin';
import AdminDashboard from './sections/AdminDashboard';
import Footer from './sections/Footer';
import Error from './sections/Error';
import FindmyspotMap from './sections/FindmyspotMap';
import Clients from './sections/Clients';
import ParkingManager from './sections/ParkingManager';
import RfidCards from './sections/RfidCards';
import RfidScanners from './sections/RfidScanners';
import VehicleTheft from './sections/VehicleTheft';
import SignUp from './sections/Signup';
import Signin from './sections/Signin'; // Assuming you have a Signin component
import Signup from './sections/Signup';

const ProtectedRoute = ({ element: Component, isLoggedIn }) => {
  return isLoggedIn ? (
    <Component />
  ) : (
    <Navigate to="/admin-login" replace />
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 150,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/map" element={<FindmyspotMap />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />


          <Route
            path="/admin-login"
            element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/admin-dashboard"
            element={<ProtectedRoute element={AdminDashboard} isLoggedIn={isLoggedIn} />} 
          />
          <Route
            path="/clients"
            element={<ProtectedRoute element={Clients} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/parkingmanagers"
            element={<ProtectedRoute element={ParkingManager} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/rfid-cards"
            element={<ProtectedRoute element={RfidCards} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/rfid-scanners"
            element={<ProtectedRoute element={RfidScanners} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/vehicletheft"
            element={<ProtectedRoute element={VehicleTheft} isLoggedIn={isLoggedIn} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

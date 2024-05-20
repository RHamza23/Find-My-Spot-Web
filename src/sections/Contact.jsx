import React, { useState } from 'react';
import { db } from '../firebase'; // Adjust the path based on your project structure
import { collection, addDoc } from 'firebase/firestore';
import backgroundImage from '../assets/img/31.jpeg'; // Adjust the path to your image

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      addDoc(collection(db, 'contacts'), {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      });

      // Reset the form fields
      setName('');
      setEmail('');
      setMessage('');

      console.log('Form data submitted successfully to Firebase.');
    } catch (error) {
      console.error('Error submitting form data to Firebase:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="relative z-10 w-full max-w-6xl min-h-[80vh] p-12 bg-white rounded-md shadow-xl transform transition-transform duration-300">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-500">
          Ask Your Query
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-blue-500 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-blue-500 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-blue-500 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              rows={6}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

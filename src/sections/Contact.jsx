import React, { useState } from 'react'

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can implement your logic to handle the form submission
    // For this example, let's just log the form data
    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Message:', message);

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <br />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-500">Ask Your Query</h2>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
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
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
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
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            rows={4}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
      >
          Submit
        </button>
      </form>
      <br />
    </>
  )
}

export default Contact

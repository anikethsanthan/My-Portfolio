import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"
import { useState } from 'react'
import {db} from '../utils/firebase';

const StartProject = () => {
  const location=useLocation();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [company ,setCompany]=useState("");
  const [message,setMessage]=useState("");


  const handleSubmit=(e)=>{
    e.preventDefault(); 

    db.collection('contactform').add({
      name:name,
      email:email,
      phone:phone,
      company:company,
      message:message,
    })
    .then(()=>{
      alert("Your message has been submitted, Thankyou for your interest");

    })
    .catch((error)=>{
      alert(error.message+"Sorry the from was not submitted try using email instead");

    })
    setName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setMessage("");

  }
  return (
    <div>
       {location.pathname !=="/" && <Header/> }
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form  onSubmit={handleSubmit}
       className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg" id="contactForm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>

        <div className='flex'>
        {/* Full Name */}
        <div className="mb-4 mr-3">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your full name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 "
            required
            value={name}
            onChange={(e)=>setName(e.target.value)}
            
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        </div>

        <div className='flex'>

        {/* Phone */}
        <div className="mb-4 mr-3">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Your phone number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
        </div>

        {/* Company */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            placeholder="Your company name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={company}
            onChange={(e)=>setCompany(e.target.value)}
          />
        </div>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Your message"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="5"
            required
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit" 
          className="w-full  bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Send Message
        </button>
      </form>
      
    </div>
    
    {location.pathname !=="/" && <Footer/> }
    </div>
  )
}

export default StartProject

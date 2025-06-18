"use client";

import React, { useState } from "react";

const Contact = () => {
  
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("Failed to send. Try again later.");
    }
  };

  return (
    <div id="Contact">
      <h1 className="text-4xl md:text-6xl font-bold  text-center text-white py-6 bg-blue-800  mt-10">contact us</h1>
      <section className="text-gray-600 body-font relative">
        {/* <div className="">
      
        </div> */}
        <div className="container pt-4 flex sm:grid-cols-2 mx-auto flex-wrap">
          <div className="w-[800px] h-[600px] bg-blue-900 text-center  rounded-lg shadow-lg mt-[20px]">
            <h1 className="font-bold text-4xl text-white pl-4 pt-[55px] hover:bg-blue-500"> LinkedIn </h1>
<h3 className="font-semibold text-white pl-4 text-2xl hover:bg-blue-500">Global Food Safety
 Standards</h3>
 <h1 className="font-bold text-3xl text-white pl-4 pt-[55px] hover:bg-blue-500">Phone</h1>
 <h3 className="text-white pl-4 hover:bg-blue-500">+923431886417</h3>
 <h1 className="font-bold text-3xl text-white pl-4 pt-[65px] hover:bg-blue-500">Email Address</h1>
 <h3 className="text-white pl-4 hover:bg-blue-600"> <a href="mailto:example@example.com">globalfoodsafetystandards@gmail.com</a></h3>
 </div>
          <form
            onSubmit={handleSubmit}
            className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
          >
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Dear Customer! Your Feedback Is Valuable for Us.
            </p>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
            <p className="text-sm text-gray-500 mt-2">{status}</p>
          </form>
          
        </div>
        
      </section>
      
    </div>
    
  );
};

export default Contact;

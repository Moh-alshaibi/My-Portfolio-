import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  const [showPage, setShowPage] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClosePage = () => {
    setShowPage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      {showPage && (
        <div>
          <div>
            <Link
              to="/home"
              className="absolute top-8 right-10 text-3xl p-2 hover:text-yellow-900 cursor-pointer"
              onClick={handleClosePage}
            >
              X
            </Link>
          </div>
          <div className="absolute bottom-10 right-10 text-xl">
            <p>{"<Contact/>"}</p>
          </div>
          <div className="absolute top-10 left-5 text-xl">
            <p>{"<Contact>"}</p>
          </div>

          <div className="contact-form-container bg-neutral-900 mt-48">
            <h2 className="flex justify-center text-white">Contact me</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="text-white" htmlFor="name">Name</label> 
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                
                  required
                />
              </div>
              <div className="form-group">
                <label className="text-white" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                  required
                />
              </div>
              <div className="form-group">
                <label className="text-white" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contacts;

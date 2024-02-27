import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit} >
        <label htmlFor="name">Name:</label>
        <input 
          id="name" 
          type="name" 
          value={name} 
          placeholder="Enter your full name..." 
          onChange={(e) => setName(e.target.value)} 
          required
        />
        <br />
        <label htmlFor="phone">Phone Number (Format: 07### ### ###):</label>
        <input
          id="phone" 
          type="phone" 
          value={phone} 
          placeholder="Enter a valid UK phone number..." 
          pattern="((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}" 
          onChange={(e) => setPhone(e.target.value)} 
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="Enter a valid email address..."
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit">Add Contact</button>
      </form>
    </>
  );
};


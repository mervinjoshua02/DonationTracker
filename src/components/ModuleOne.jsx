import React, { useState, useContext } from 'react';
import { DonationContext } from '../context/DonationContext';

const ModuleOne = () => {
  const { addDonation } = useContext(DonationContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    donation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDonation(formData);
    alert(`Thank you, ${formData.name}, for donating ₹${formData.donation}!`);
    setFormData({
      name: '',
      email: '',
      contact: '',
      address: '',
      donation: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-elements element">
        <label>Name</label>
        <input
          className="inputs"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="form-elements element">
        <label>Email</label>
        <input
          className="inputs"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="form-elements element">
        <label>Contact</label>
        <input
          className="inputs"
          type="number"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div className="form-elements element">
        <label>Address</label>
        <input
          className="inputs"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your Address"
        />
      </div>

      <div className="form-elements element">
        <label>Donation</label>
        <input
          className="inputs"
          type="number"
          name="donation"
          value={formData.donation}
          onChange={handleChange}
          placeholder="Enter amount"
          required
        />
      </div>

      <button className="donate-btn" type="submit">
        DONATE
      </button>
    </form>
  );
};

export default ModuleOne;

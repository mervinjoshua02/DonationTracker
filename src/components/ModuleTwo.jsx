import React, { useContext } from 'react';
import { DonationContext } from '../context/DonationContext';

const ModuleTwo = () => {
  const { donations, setDonations } = useContext(DonationContext);

  const handleDelete = (indexToDelete) => {
    const updated = donations.filter((_, index) => index !== indexToDelete);
    setDonations(updated);
  };

  return (
    <div className="module-two-container">
      <h2>All Donations</h2>
      {donations.length === 0 ? (
        <p>No donations yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Donation (₹)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((d, index) => (
              <tr key={index}>
                <td data-label="Name">{d.name}</td>
                <td data-label="Email">{d.email}</td>
                <td data-label="Contact">{d.contact}</td>
                <td data-label="Address">{d.address}</td>
                <td data-label="Donation">{d.donation}</td>
                <td data-label="Action">
                  <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ModuleTwo;

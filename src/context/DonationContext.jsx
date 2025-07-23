import { createContext, useState } from 'react';


export const DonationContext = createContext();


export const DonationProvider = ({ children }) => {
  const [donations, setDonations] = useState([]);


  const addDonation = (donation) => {
    setDonations(prev => [...prev, donation]);
  };

  return (
    <DonationContext.Provider value={{ donations, setDonations, addDonation }}>
      {children}
    </DonationContext.Provider>
  );
};

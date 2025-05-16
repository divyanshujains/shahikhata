import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const Allcustomer = createContext();

export const CustomerProvider = ({ children }) => {
  const [Customerdata, setCustomerdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://192.168.1.10:8080/api/customer");
      
        setCustomerdata(response.data); // ✅ Enable setting the data
      } catch (error) {
        console.log("Error fetching customer data:", error);
      }
    };

    fetchdata();
  }, []);

  return (
    <Allcustomer.Provider value={Customerdata}>
      {children}
    </Allcustomer.Provider>
  );
};

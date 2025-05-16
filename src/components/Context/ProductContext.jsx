import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const MyContext = createContext();

export const ProductContext = ({ children }) => {
  const [Data, setData] = useState([]);

  useEffect(() => {

    const fetchdata = async ()=>{
        try {
            const response = await axios.get("http://192.168.1.10:8080/api/products");
            setData(response.data)
            
        } catch (error) {
         console.log(error);
            
        }
    }

    fetchdata();
  
  }, [])
  


  return (
    <MyContext.Provider value={Data}>
      {children}
    </MyContext.Provider>
  );
};

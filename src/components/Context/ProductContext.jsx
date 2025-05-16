import React, { createContext, useEffect, useState } from 'react';

import api from '../../../utils/Instance';

export const MyContext = createContext();

export const ProductContext = ({ children }) => {
  const [Data, setData] = useState([]);

  useEffect(() => {

    const fetchdata = async ()=>{
        try {
            const response = await api.get("/products");
            setData(response.data)
            
        } catch (error) {
         console.error("Error fetching products:", error);
            
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

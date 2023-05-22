import React, { createContext, useState } from 'react';
export const SearchContext = createContext();

export const SearchProvider = (props) =>  {
    const [data, setData] = useState([]);

    const setSearchData = (newData) => {
        setData(newData);
      };
    

    return ( 
        <SearchContext.Provider
          value={{
              data: data,
              setData: setSearchData,
          }}  
        >
        {props.children}
        </SearchContext.Provider>
     );
};
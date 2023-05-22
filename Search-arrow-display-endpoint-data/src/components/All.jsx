import React, { useState, useEffect, useContext } from 'react';
import './All.css';
import { Link } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { dummy_data } from './images';
import { SearchContext } from '../context/SearchContext';

function All() {
  const { data, setData } = useContext(SearchContext);

  useEffect(() => {
    setData(dummy_data)
  }, []);
  

  // const [data, setData] = useState([]);
  const location = useLocation();
  const searchQuery = location.state?.searchQuery;
  
  const searchParams = new URLSearchParams({
    query: searchQuery,
  });

  // useEffect(() => {
  //   const formData = new FormData();
  //   formData.append('query', searchQuery);
  
  //   fetch('http://127.0.0.1:5000/', {
  //     method: 'POST',
  //     body: formData
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data);
  //     })
  //     .catch(error => console.error(error));
  // }, [searchQuery]);

   
  return (
    <div className="LinkTabs-container">
      <div className="LinkTabs-content">
        {data.map((page, index) => (
          <div className="LinkTabs-tabContent" key={index} >
            <p className="LinkTabs-url">{page.url}</p>
            <a href={page.url} className="LinkTabs-title">{page.title}</a>
            <p className="LinkTabs-snippet">{page.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default All;

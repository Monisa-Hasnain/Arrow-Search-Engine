import React, { useState, useEffect } from 'react';
import './All.css';
import { Link } from '@mui/material';
import { useLocation } from 'react-router-dom';

function All() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const searchQuery = location.state?.searchQuery;

  useEffect( () => {
      const fetchData = async () => {
        const response = await fetch('http://localhost:3030/all');
        const json = await response.json();
        debugger
        setData(json);
      };
      fetchData();
    
  }, [searchQuery]);

  return (
    <div className="LinkTabs-container">
      <div>{searchQuery}</div>
      <div className="LinkTabs-content">
        {data.map((link, index) => (
          <div className="LinkTabs-tabContent" key={index} >
            <a href={link.link}>{link.link}</a>
            <p>{link.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default All;

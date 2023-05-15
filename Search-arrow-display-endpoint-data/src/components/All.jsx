import React, { useState, useEffect } from 'react';
import './All.css';
import { Link } from '@mui/material';
import { useLocation } from 'react-router-dom';

function All() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const searchQuery = location.state?.searchQuery;
  
  const searchParams = new URLSearchParams({
    query: searchQuery,
  });


  useEffect(() => {
    const formData = new FormData();
    formData.append('query', searchQuery);
  
    fetch('http://127.0.0.1:5000/', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        debugger;
        console.log(data);
        setData(data);
      })
      .catch(error => console.error(error));
  }, [searchQuery]);
  


  // useEffect(() => {
  //   fetch('http://127.0.0.1:5000/', {
  //   method: 'POST',
  //   headers: {
  //   'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({searchParams})
  //   }).then(response => response.json())
  //   .then(data => {
  //       debugger
  //       console.log(data)
  //       setData(data) })
  //     .catch(error => console.error(error));
  // }, [searchQuery]);

  return (
    <div className="LinkTabs-container">
      <div className="LinkTabs-content">
        {data.map((page, index) => (
          <div className="LinkTabs-tabContent" key={index} >
            <a href={page.link}>{page.title}</a>
            <p>{page.snippet}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default All;

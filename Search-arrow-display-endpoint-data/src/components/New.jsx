import React, { useState } from 'react'
import { useContext, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import './New.css'
import { SearchContext } from '../context/SearchContext';


export const New = () => {
  const [news, setNews] = useState([]);

  const { data, setData } = useContext(SearchContext);
  // const query = data && data[0] && data[0].query ? data[0].query.split("=")[1] : null;

  // // const query = data[0]["query"].split("=")[1]
  // console.log(query)

  // useEffect(() => {
  //   // Function to make the API POST call
  //   // Make the API call
  //   fetch('http://127.0.0.1:5001/news', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ query: query }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setNews(data);
  //       // Save data to local storage
  //       // localStorage.setItem('new', JSON.stringify(data));
  //     })
  //     .catch(error => {
  //       // Handle the error
  //       console.error(error);
  //     });
  // }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  useEffect(() => {  
    const savedData = localStorage.getItem('myData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);
  

    const newItems = data.map((data) => {
      const { id, title, url, snippet } = data;
      const webpage_link = url; // Assuming there's only one video URL per item
      return { id, title, webpage_link, snippet };
    },[]);
  
    const handleClick = (url) => {
      window.open(url, '_blank'); // Open link in a new tab
    };
  
    return (
      <div className='LinkTabs-container'>
        <h2>Related News</h2>
        <div className='NewGallery'>
          {newItems.map((item) => (
            <Card key={item.id} onClick={() => handleClick(item.webpage_link)} className='NewCard'>
              <CardActionArea>
                <CardContent>
                  <Typography variant='subtitle1'>{item.snippet}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    );
}

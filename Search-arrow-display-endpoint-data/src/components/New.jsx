import React from 'react'
import { useContext, useEffect } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { dummy_data } from './images';
import { SearchContext } from '../context/SearchContext';


export const New = () => {
  const { data, setData } = useContext(SearchContext);

  useEffect(() => {
    const savedData = localStorage.getItem('myData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, [data]);

    const newItems = data.map((data) => {
      const { id, title, url } = data;
      const webpage_link = url; // Assuming there's only one video URL per item
      return { id, title, webpage_link };
    });
  
    const handleClick = (url) => {
      window.open(url, '_blank'); // Open link in a new tab
    };
  
    return (
      <div className='LinkTabs-container'>
        <h2>New Arrivals</h2>
        <div className='NewGallery'>
          {newItems.map((item) => (
            <Card key={item.id} onClick={() => handleClick(item.webpage_link)} className='NewCard'>
              <CardActionArea>
                <CardContent>
                  <Typography variant='subtitle1'>{item.title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    );
}

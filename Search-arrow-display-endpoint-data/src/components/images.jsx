import React from 'react'
import { useContext, useEffect } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { SearchContext } from '../context/SearchContext';

import './All.css'
import './images.css'
import { json } from 'react-router-dom';


// const dummyImage = JSON.parse("\"https://conservationnation.org/wp-content/uploads/2020/02/bengal-tiger-hero.jpg\"")

export const Images = () => {
  const { data, setData } = useContext(SearchContext);

  useEffect(() => {
    const savedData = localStorage.getItem('myData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);


  const imageItems = data.map((data) => {
    const { id, title, url, image_urls } = data;
    console.log(image_urls)
    // JSON.parse(image_urls)
    let imageUrl;
    if (Array.isArray(image_urls) && image_urls.length > 0) {
      imageUrl = image_urls;
      console.log("image", image_urls)
      
    } else {
      imageUrl =JSON.parse(image_urls);
      // imageUrl = [];
    }
      return { id, title, url, imageUrl };
  });

  // console.log(imageItems)


  const handleClick = (url) => {
    window.open(url, '_blank'); // Open link in a new tab
  };

  return (
    <div className='LinkTabs-container'>
      <h2>Images</h2>
      <div className='ImageGallery'>        
        {imageItems.map((item, index) => (
          
          item.imageUrl.map((imge) => {
            return <Card key={item.id} onClick={() => handleClick(item.url)} className='ImageCard' >
              <CardActionArea>
                <CardContent>
                  <Typography variant='subtitle1'>{item.title}</Typography>
                </CardContent>
                <CardMedia
                  key={item.id}
                  component="img"
                  height="200"
                  image={imge}
                  alt={item.title}
                  style={{ objectFit: 'cover', maxWidth: '100%', maxHeight: '100%' }}
                />
              </CardActionArea>
            </Card>

          })
        ))}
      </div>
    </div>
  );
}
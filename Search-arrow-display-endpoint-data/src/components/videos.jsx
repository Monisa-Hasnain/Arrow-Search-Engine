import React from 'react'
import { useContext, useEffect } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { SearchContext } from '../context/SearchContext';
import './videos.css'


export const Videos = () => {
  const { data, setData } = useContext(SearchContext);

  useEffect(() => {
    const savedData = localStorage.getItem('myData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  // Extract video URLs and related data from dummy_data
  const videoItems = data.map((data) => {
    const { id, title, video_urls } = data;
    let videoUrls = []

    if (Array.isArray(video_urls) && video_urls.length > 0) {
      videoUrls = video_urls;
      console.log("vidoe", video_urls)
    } else if (Array.isArray(video_urls) && video_urls.length === 0) {
      videoUrls = [];
    }
    else{
      videoUrls =JSON.parse(video_urls);
    }
    return { id, title, videoUrls };
  });

  const handleClick = (url) => {
    window.open(url, '_blank'); // Open link in a new tab
  };

  return (
    
    <div className='LinkTabs-container'>
      <h2>Videos</h2>
      <div className='VideoGallery'>
        
        {videoItems.map((item) => (
          item.videoUrls.map((video) => {
            return <Card key={item.id} onClick={() => handleClick(video)} className='VideoCard'>
              <CardActionArea>
                <CardContent>
                  <Typography variant='subtitle1'>{item.title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          })
        ))}
      </div>
    </div>
  );
}

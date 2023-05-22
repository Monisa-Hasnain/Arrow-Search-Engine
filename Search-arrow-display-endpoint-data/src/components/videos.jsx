import React from 'react'
import { useContext } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { dummy_data } from './images';
import { SearchContext } from '../context/SearchContext';
import './videos.css'


export const Videos = () => {
  const { data, setData } = useContext(SearchContext);

  // Extract video URLs and related data from dummy_data
  const videoItems = data.map((data) => {
    const { id, title, video_urls } = data;
    const videoUrl = JSON.parse(video_urls)[0];
    return { id, title, videoUrl };
  });

  const handleClick = (url) => {
    window.open(url, '_blank'); // Open link in a new tab
  };

  return (
    <div className='LinkTabs-container'>
      <h2>Videos</h2>
      <div className='VideoGallery'>
        {videoItems.map((item) => (
          <Card key={item.id} onClick={() => handleClick(item.videoUrl)} className='VideoCard'>
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

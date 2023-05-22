import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

import './All.css'
import './images.css'

export const dummy_data = [
  {
    id: 1,
    query: "json-server",
    title: "search query 1",
    url: "https://www.youtube.com/channel/UCg4nrQAZN-TYrMNsvC-ZE2Q",
    snippet: "This is a snippet about Typicode",
    source: "Typicode",
    webpage_links: ["https://example.com/link1", "https://example.com/link2"],
    image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
    video_urls: ["https://www.youtube.com/results?search_query=how+to+deploy+react+application+on+iis+server", "https://www.youtube.com/watch?v=video2"],
    priority: 2,
    blocked: false
  },
  {
    id: 2,
    query: "json-server",
    title: "search query 2",
    url: "https://www.example.com/json-server",
    snippet: "This is a snippet about Typicode",
    source: "Typicode",
    webpage_links: ["https://example.com/link1", "https://example.com/link2"],
    image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
    video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
    priority: 2,
    blocked: false
  },
  {
    id: 3,
    query: "json-server",
    title: "search query 3",
    url: "https://www.example.com/json-server",
    snippet: "This is a snippet about Typicode",
    source: "Typicode",
    webpage_links: ["https://example.com/link1", "https://example.com/link2"],
    image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0"],
    video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
    priority: 2,
    blocked: false
  },
  {
    id: 1,
    query: "json-server",
    title: "search query 1",
    url: "https://www.youtube.com/channel/UCg4nrQAZN-TYrMNsvC-ZE2Q",
    snippet: "This is a snippet about Typicode",
    source: "Typicode",
    webpage_links: ["https://example.com/link1", "https://example.com/link2"],
    image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
    video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
    priority: 2,
    blocked: false
  },
  {
    id: 2,
    query: "json-server",
    title: "search query 2",
    url: "https://www.example.com/json-server",
    snippet: "This is a snippet about Typicode",
    source: "Typicode",
    webpage_links: ["https://example.com/link1", "https://example.com/link2"],
    image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
    video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
    priority: 2,
    blocked: false
  },
  {
    id: 3,
    query: "json-server",
    title: "search query 3",
    url: "https://www.example.com/json-server",
    snippet: "This is a snippet about Typicode",
    source: "Typicode",
    webpage_links: ["https://example.com/link1", "https://example.com/link2"],
    image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0"],
    video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
    priority: 2,
    blocked: false
  },
  {
    id: 1,
    query: "json-server",
    title: "search query 1",
    url: "https://www.youtube.com/channel/UCg4nrQAZN-TYrMNsvC-ZE2Q",
    snippet: "This is a snippet about Typicode",
    source: "Typicode",
    webpage_links: ["https://example.com/link1", "https://example.com/link2"],
    image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
    video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
    priority: 2,
    blocked: false
  },
  {
    id: 2,
    query: "json-server",
    title: "search query 2",
    url: "https://www.example.com/json-server",
    snippet: "This is a snippet about Typicode",
    source: "Typicode",
    webpage_links: ["https://example.com/link1", "https://example.com/link2"],
    image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
    video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
    priority: 2,
    blocked: false
  },
  {
    id: 3,
    query: "json-server",
    title: "search query 3",
    url: "https://www.example.com/json-server",
    snippet: "This is a snippet about Typicode",
    source: "Typicode",
    webpage_links: ["https://example.com/link1", "https://example.com/link2"],
    image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0"],
    video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
    priority: 2,
    blocked: false
  },
  {
    id: 1,
    query: "json-server",
    title: "search query 1",
    url: "https://www.youtube.com/channel/UCg4nrQAZN-TYrMNsvC-ZE2Q",
    snippet: "This is a snippet about Typicode",
    source: "Typicode",
    webpage_links: ["https://example.com/link1", "https://example.com/link2"],
    image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
    video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
    priority: 2,
    blocked: false
  },
  {
    id: 2,
    query: "json-server",
    title: "search query 2",
    url: "https://www.example.com/json-server",
    snippet: "This is a snippet about Typicode",
    source: "Typicode",
    webpage_links: ["https://example.com/link1", "https://example.com/link2"],
    image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
    video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
    priority: 2,
    blocked: false
  },
  {
    id: 3,
    query: "json-server",
    title: "search query 3",
    url: "https://www.example.com/json-server",
    snippet: "This is a snippet about Typicode",
    source: "Typicode",
    webpage_links: ["https://example.com/link1", "https://example.com/link2"],
    image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0"],
    video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
    priority: 2,
    blocked: false
  }
];

export const Images = () => {

  const imageItems = dummy_data.map((data) => {
    const { id, title, url, image_urls } = data;
    const imageUrl = image_urls[0]; // Assuming there's only one image URL per item
    return { id, title, url, imageUrl };
  });

  const handleClick = (url) => {
    window.open(url, '_blank'); // Open link in a new tab
  };

  return (
    <div className='LinkTabs-container'>
      <h2>Images</h2>
      <div className='ImageGallery'>
        {imageItems.map((item) => (
          <Card key={item.id} onClick={() => handleClick(item.url)} className='ImageCard' >
            <CardActionArea>
              <CardMedia component='img' height='200' image={item.imageUrl} alt={item.title} />
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

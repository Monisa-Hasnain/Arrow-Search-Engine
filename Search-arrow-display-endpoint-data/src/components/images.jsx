import React from 'react'
import { useContext } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { SearchContext } from '../context/SearchContext';

import './All.css'
import './images.css'

export const dummy_data = [
//   {
//     id: 1,
//     query: "json-server",
//     title: "search query 1",
//     url: "https://www.youtube.com/channel/UCg4nrQAZN-TYrMNsvC-ZE2Q",
//     snippet: "This is a snippet about Typicode",
//     source: "Typicode",
//     webpage_links: ["https://example.com/link1", "https://example.com/link2"],
//     image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
//     video_urls: ["https://www.youtube.com/results?search_query=how+to+deploy+react+application+on+iis+server", "https://www.youtube.com/watch?v=video2"],
//     priority: 2,
//     blocked: false
//   },
//   {
//     id: 2,
//     query: "json-server",
//     title: "search query 2",
//     url: "https://www.example.com/json-server",
//     snippet: "This is a snippet about Typicode",
//     source: "Typicode",
//     webpage_links: ["https://example.com/link1", "https://example.com/link2"],
//     image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
//     video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
//     priority: 2,
//     blocked: false
//   },
//   {
//     id: 3,
//     query: "json-server",
//     title: "search query 3",
//     url: "https://www.example.com/json-server",
//     snippet: "This is a snippet about Typicode",
//     source: "Typicode",
//     webpage_links: ["https://example.com/link1", "https://example.com/link2"],
//     image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0"],
//     video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
//     priority: 2,
//     blocked: false
//   },
//   {
//     id: 1,
//     query: "json-server",
//     title: "search query 1",
//     url: "https://www.youtube.com/channel/UCg4nrQAZN-TYrMNsvC-ZE2Q",
//     snippet: "This is a snippet about Typicode",
//     source: "Typicode",
//     webpage_links: ["https://example.com/link1", "https://example.com/link2"],
//     image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
//     video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
//     priority: 2,
//     blocked: false
//   },
//   {
//     id: 2,
//     query: "json-server",
//     title: "search query 2",
//     url: "https://www.example.com/json-server",
//     snippet: "This is a snippet about Typicode",
//     source: "Typicode",
//     webpage_links: ["https://example.com/link1", "https://example.com/link2"],
//     image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
//     video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
//     priority: 2,
//     blocked: false
//   },
//   {
//     id: 3,
//     query: "json-server",
//     title: "search query 3",
//     url: "https://www.example.com/json-server",
//     snippet: "This is a snippet about Typicode",
//     source: "Typicode",
//     webpage_links: ["https://example.com/link1", "https://example.com/link2"],
//     image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0"],
//     video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
//     priority: 2,
//     blocked: false
//   },
//   {
//     id: 1,
//     query: "json-server",
//     title: "search query 1",
//     url: "https://www.youtube.com/channel/UCg4nrQAZN-TYrMNsvC-ZE2Q",
//     snippet: "This is a snippet about Typicode",
//     source: "Typicode",
//     webpage_links: ["https://example.com/link1", "https://example.com/link2"],
//     image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
//     video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
//     priority: 2,
//     blocked: false
//   },
//   {
//     id: 2,
//     query: "json-server",
//     title: "search query 2",
//     url: "https://www.example.com/json-server",
//     snippet: "This is a snippet about Typicode",
//     source: "Typicode",
//     webpage_links: ["https://example.com/link1", "https://example.com/link2"],
//     image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
//     video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
//     priority: 2,
//     blocked: false
//   },
//   {
//     id: 3,
//     query: "json-server",
//     title: "search query 3",
//     url: "https://www.example.com/json-server",
//     snippet: "This is a snippet about Typicode",
//     source: "Typicode",
//     webpage_links: ["https://example.com/link1", "https://example.com/link2"],
//     image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0"],
//     video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
//     priority: 2,
//     blocked: false
//   },
//   {
//     id: 1,
//     query: "json-server",
//     title: "search query 1",
//     url: "https://www.youtube.com/channel/UCg4nrQAZN-TYrMNsvC-ZE2Q",
//     snippet: "This is a snippet about Typicode",
//     source: "Typicode",
//     webpage_links: ["https://example.com/link1", "https://example.com/link2"],
//     image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
//     video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
//     priority: 2,
//     blocked: false
//   },
//   {
//     id: 2,
//     query: "json-server",
//     title: "search query 2",
//     url: "https://www.example.com/json-server",
//     snippet: "This is a snippet about Typicode",
//     source: "Typicode",
//     webpage_links: ["https://example.com/link1", "https://example.com/link2"],
//     image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://example.com/image2.jpg"],
//     video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
//     priority: 2,
//     blocked: false
//   },
//   {
//     id: 3,
//     query: "json-server",
//     title: "search query 3",
//     url: "https://www.example.com/json-server",
//     snippet: "This is a snippet about Typicode",
//     source: "Typicode",
//     webpage_links: ["https://example.com/link1", "https://example.com/link2"],
//     image_urls: ["https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0"],
//     video_urls: ["https://www.youtube.com/watch?v=video1", "https://www.youtube.com/watch?v=video2"],
//     priority: 2,
//     blocked: false
//   }

	{
		"id" : 1,
		"query" : "news",
		"title" : "Latest News, Breaking News, Top News Headlines and Current Affairs ...",
		"url" : "https://timesofindia.indiatimes.com/news",
		"snippet" : "Latest <b>News</b> Today: Breaking <b>news</b> on Politics, Business, Sports, Bollywood, Education, Science. Latest <b>News</b> on Politics, India, Current affairs. Times of India Covers all latest breaking <b>news</b> ...",
		"source" : "https://<b>timesofindia.indiatimes.com</b>/<b>news</b>",
		"image_urls" : "[\"https://th.bing.com/th/id/R.86cd1f131d9efe0ea759a9b00715d4c9?rik=1AfmFVTcttfDjA&pid=ImgRaw&r=0\"]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 2,
		"query" : "news",
		"title" : "Latest News, Breaking News, National News, World News, India News - The ...",
		"url" : "https://www.thehindu.com/news/",
		"snippet" : "Read the Latest <b>News</b> On Business, Politics, Sports, Entertainment &amp; Much More From India And Around The World At The Hindu",
		"source" : "https://<b>www.thehindu.com</b>/<b>news</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 3,
		"query" : "news",
		"title" : "News, Breaking News, Latest News, News Headlines, Live News, Today News ...",
		"url" : "https://www.news18.com/",
		"snippet" : "<b>News</b>: Read Latest Live Breaking <b>News</b> and <b>news</b> on News18.com of India, World, Sports, Entertainment, Business, Auto, Politics, Tech and More. Get CNN-News18 live <b>news</b> updates, <b>news</b> headlines on Technology, Live TV, Lifestyle, Photo Gallery and Video <b>News</b> Coverage.",
		"source" : "https://www.<b>news</b>18.com",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 4,
		"query" : "news",
		"title" : "News - Breaking News and Top Video News - India Today",
		"url" : "https://www.indiatoday.in/news.html",
		"snippet" : "Cinema <b>News</b> tracks the latest from Bollywood, Hollywood and the South film industries and TV channels. Sports <b>News</b> has all the sports from India and abroad with a special focus on cricket. Lifestyle <b>News</b> presents developments that impact one&#39;s lifestyle. World <b>News</b> makes sense of <b>news</b> across the world and its impact on India",
		"source" : "https://www.indiatoday.in/<b>news</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 5,
		"query" : "news",
		"title" : "World - BBC News",
		"url" : "https://www.bbc.com/news/world",
		"snippet" : "Get the latest BBC World <b>News</b>: international <b>news</b>, features and analysis from Africa, the Asia-Pacific, Europe, Latin America, the Middle East, South Asia, and the United States and Canada.",
		"source" : "https://<b>www.bbc.com</b>/<b>news</b>/world",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 6,
		"query" : "news",
		"title" : "Bing News",
		"url" : "https://www.bing.com/news",
		"snippet" : "<b>News</b> from world, national, and local <b>news</b> sources, organized to give you in-depth <b>news</b> coverage of sports, entertainment, business, politics, weather, and more.",
		"source" : "https://www.bing.com/<b>news</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 7,
		"query" : "news",
		"title" : "India News, National News, Latest National News, Breaking ... - The Hindu",
		"url" : "https://www.thehindu.com/news/national/",
		"snippet" : "Follow The Latest National <b>News</b> From All Over The Country With Interviews, Live Updates, Breaking <b>News</b> &amp; Much More At The Hindu",
		"source" : "https://<b>www.thehindu.com</b>/<b>news</b>/national",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 8,
		"query" : "news",
		"title" : "Latest India News, Headlines, Stories and Videos - Rediff.com",
		"url" : "https://www.rediff.com/news/",
		"snippet" : "Rediff <b>News</b> - Delivers most trusted <b>news</b> from India and around the world. Impeccable coverage on society, politics, business, sports and entertainment. Top stories, Editorial columns, discussions ...",
		"source" : "https://<b>www.rediff.com</b>/<b>news</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 9,
		"query" : "news",
		"title" : "Latest News, Breaking News, latest News Today, Current News | Zee News",
		"url" : "https://zeenews.india.com/latest-news",
		"snippet" : "Zee <b>News</b> brings latest <b>news</b> from India and World on breaking <b>news</b>, today <b>news</b> headlines, politics, business, technology, bollywood, entertainment, sports and others. Find exclusive <b>news</b> stories on Indian politics, current affairs, cricket matches, festivals and events.",
		"source" : "https://<b>zeenews.india.com</b>/latest-<b>news</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 10,
		"query" : "news",
		"title" : "Home - BBC News",
		"url" : "https://www.bbc.co.uk/news",
		"snippet" : "Visit BBC <b>News</b> for up-to-the-minute <b>news</b>, breaking <b>news</b>, video, audio and feature stories. BBC <b>News</b> provides trusted World and UK <b>news</b> as well as local and regional perspectives. Also ...",
		"source" : "https://<b>www.bbc.co.uk</b>/<b>news</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 11,
		"query" : "news",
		"title" : "Latest News - The Hindu",
		"url" : "https://www.thehindu.com/latest-news/",
		"snippet" : "Top <b>news</b> of the day: RBI to withdraw ₹2000 notes from circulation; Supreme Court-appointed expert panel says SEBI probe into Adani row drew a blank, and more. The Hindu Bureau.",
		"source" : "https://<b>www.thehindu.com</b>/<b>latest-news</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 12,
		"query" : "news",
		"title" : "Latest News: Today&#39;s Latest News Online | Latest News from India ...",
		"url" : "https://www.news18.com/news/",
		"snippet" : "News18.com brings all latest <b>news</b> and top breaking <b>news</b> from India and World. Read latest <b>news</b> headlines, breaking <b>news</b>, current affairs and today&#39;s latest <b>news</b> coverage, photos, videos and many more.",
		"source" : "https://www.<b>news</b>18.com/<b>news</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 13,
		"query" : "news",
		"title" : "News in English: Latest News, Breaking News, Live Updates - India TV News",
		"url" : "https://www.indiatvnews.com/",
		"snippet" : "<b>News</b> in English: Get all Breaking <b>News</b> Headlines from India and World. Photos, Live <b>news</b> coverage and Latest <b>News</b> from Politics, Bollywood, Bihar Election 2023 <b>News</b>, at India TV <b>News</b>.",
		"source" : "https://www.indiatv<b>news</b>.com",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 14,
		"query" : "news",
		"title" : "Yahoo News - Latest News &amp; Headlines",
		"url" : "https://news.yahoo.com/",
		"snippet" : "The latest <b>news</b> and headlines from <b>Yahoo! News</b>. Get breaking <b>news</b> stories and in-depth coverage with videos and photos.",
		"source" : "https://<b>news.yahoo.com</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 15,
		"query" : "news",
		"title" : "News Live: Read Latest News, Headlines, Top News today, Breaking News ...",
		"url" : "https://economictimes.indiatimes.com/news",
		"snippet" : "<b>News</b> Live: Read latest <b>news</b> today, breaking <b>news</b> headlines, Top <b>news</b>. Discover national and international <b>news</b> on economy, politics, defence, sports, science, environment and more on The Economic Times.",
		"source" : "https://<b>economictimes.indiatimes.com</b>/<b>news</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 16,
		"query" : "news",
		"title" : "ఈనాడు : Eenadu Telugu News Paper | Eenadu ePaper | Eenadu Andhra ...",
		"url" : "https://epaper.eenadu.net/",
		"snippet" : "Eenadu ePaper : Read <b>News</b> in Telugu from Andhra Pradesh, Telangana, India and World on Politics, Cinema, Sports, Business, Cricket",
		"source" : "https://epaper.eenadu.net",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 17,
		"query" : "news",
		"title" : "News24: Get Breaking News, Latest News, India News &amp; Updates",
		"url" : "https://news24online.com/",
		"snippet" : "Get Latest Live Breaking <b>News</b>, Latest India <b>News</b>, World, Sports, Entertainment, Business, Auto, Politics, Tech and More on <b>News</b> 24 English.",
		"source" : "https://<b>news</b>24online.com",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 18,
		"query" : "news",
		"title" : "Andhra Pradesh Assembly Election Results 2019 Live Updates on round ...",
		"url" : "https://www.india.com/news/india/andhra-assembly-election-results-2019-tadpatri-singanamala-anantapur-urban-kalyandurg-raptadu-vote-counting-live-updates-3666588/",
		"snippet" : "Andhra Pradesh Assembly Election Results 2019 round-wise vote counting live updates, online winners list for Tadpatri,<b></b> Singanamala,<b></b> Anantapur urban,<b></b> Kalyandurg,<b></b> Raptadu Seats -- aaa",
		"source" : "https://www.india.com/<b>news</b>/india/andhra-<b>assembly-election-results-2019</b>-tadpatri...",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 19,
		"query" : "news",
		"title" : "TDP bags Tadipatri municipality, JC Prabhakar Reddy elected as ...",
		"url" : "https://www.thehansindia.com/andhra-pradesh/tdp-bags-tadipatri-municipality-jc-prabhakar-reddy-elected-as-municipal-chairperson-677433",
		"snippet" : "Prabhakar Reddy was elected chairman with the support of the CPI and independent candidates in addition to the strength of the 18 councilors in TDP. The chairman&#39;s seat has been in turmoil ever ...",
		"source" : "https://www.thehansindia.com/andhra-pradesh/tdp-bags-tadipatri-municipality-jc...",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/detroit/video/cbs-news-detroit-digital-brief-for-may-22-2023/\", \"https://ca.news.yahoo.com/star-wars-jedi-survivor-and-the-year-of-disappointing-pc-ports-141551209.html\", \"https://news.yahoo.com/weather-aware-central-iowa-hail-132719386.html\", \"https://news.yahoo.com/police-missing-pennsylvania-girl-may-133510954.html\", \"https://www.youtube.com/watch?v=hm_S-8oxaUk\", \"https://news.yahoo.com/urgent-talks-debt-deadline-nears-071202836.html\", \"https://www.cbsnews.com/baltimore/video/water-main-break-at-west-cold-spring-lane-could-slow-traffic-in-the-area/\", \"https://news.yahoo.com/memorial-day-quickly-approaching-lopez-063410586.html\", \"https://news.yahoo.com/race-2024-gets-more-crowded-071525894.html\", \"https://news.yahoo.com/michael-block-pga-championship-hole-133716823.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 20,
		"query" : "sports",
		"title" : "Latest Sports News, Live Scores, Results Today&#39;s Sports Headlines ...",
		"url" : "https://sports.ndtv.com/",
		"snippet" : "NDTV <b>Sports</b> is the ultimate destination for <b>Sports</b> fans from around the World. Get latest <b>sports</b> news and updates from Cricket, Tennis, Football, Formula One, Hockey, NBA and Golf with Live scores ...",
		"source" : "https://<b>sports</b>.ndtv.com",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 21,
		"query" : "sports",
		"title" : "Sports News: Latest Cricket News, Live Match Scores &amp; Sports News ...",
		"url" : "https://timesofindia.indiatimes.com/sports",
		"snippet" : "<b>The Times of India</b> <b>Sports</b> gives you latest <b>sports</b> news, cricket score, live cricket score, wwe results and milestones; covers all sporting events, provides key statistics and more",
		"source" : "https://<b>timesofindia.indiatimes.com</b>/<b>sports</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 22,
		"query" : "sports",
		"title" : "ESPN - Serving Sports Fans. Anytime. Anywhere.",
		"url" : "https://www.espn.com/",
		"snippet" : "Visit ESPN for live scores, highlights and <b>sports</b> news. Stream exclusive games on ESPN+ and play fantasy <b>sports</b>.",
		"source" : "https://www.espn.com",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 23,
		"query" : "sports",
		"title" : "Live Sports Streaming, Updates &amp; Live Sports Scores - Disney+ Hotstar",
		"url" : "https://www.hotstar.com/in/sports",
		"snippet" : "Watch live <b>sports</b> streaming &amp; get latest <b>sports</b> scores only on Disney+ Hotstar. Catch latest <b>sports</b> updates online from cricket, football, kabaddi &amp; all major <b>sports</b> on your favourite streaming website.",
		"source" : "https://www.hotstar.com/in/<b>sports</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 24,
		"query" : "sports",
		"title" : "Sports News, Latest Sports Updates, Cricket World Cup, Football, Tennis ...",
		"url" : "https://www.indiatoday.in/sports",
		"snippet" : "India Today <b>Sports</b> News - <b>Sports</b> news and live <b>sports</b> coverage of your favourite <b>sports</b> including Cricket, Football, Hockey, Tennis, Badminton and more.",
		"source" : "https://www.indiatoday.in/<b>sports</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 25,
		"query" : "sports",
		"title" : "Microsoft Start Sports - MSN",
		"url" : "https://www.msn.com/en-in/sports",
		"snippet" : "News. Feedback",
		"source" : "https://<b>www.msn.com</b>/en-in/sport",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 26,
		"query" : "sports",
		"title" : "Watch Live Sports Streaming, Schedule, Scores &amp; Highlights Online on ...",
		"url" : "https://www.jiocinema.com/sports",
		"snippet" : "Watch Live <b>Sports</b> Matches, Scores, Highlights, Results &amp; Fixtures. Also catch Latest <b>Sports</b> Updates Online from Cricket, Football, Tennis and all major <b>sports</b>. Stay tuned for Latest IPL 2023 highlights on JioCinema",
		"source" : "https://www.jiocinema.com/<b>sports</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 27,
		"query" : "sports",
		"title" : "Sports News: Latest Sports News Headlines, Live Cricket Score and News ...",
		"url" : "https://www.india.com/sports/",
		"snippet" : "<b>Sports</b> News: Find Latest <b>Sports</b> News, Cricket News, WWE News, Football News, Live Cricket Score, Hockey News, Tennis News, and Cricket World Cup 2020 Latest News Updates at India.com",
		"source" : "https://www.india.com/<b>sports</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 28,
		"query" : "sports",
		"title" : "Sports News, Scores, Standings, Rumors, Fantasy Games - Yahoo Sports",
		"url" : "https://sports.yahoo.com/",
		"snippet" : "<b>Sports</b> News, Scores, Fantasy Games . Brooks Koepka wins PGA Championship with final-round 67 at Oak Hill",
		"source" : "https://<b>sports.yahoo.com</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 29,
		"query" : "sports",
		"title" : "Sports | Definition, History, Examples, &amp; Facts | Britannica",
		"url" : "https://www.britannica.com/sports/sports",
		"snippet" : "<b>sports</b>, physical contests pursued for the goals and challenges they entail. <b>Sports</b> are part of every culture past and present, but each culture has its own definition of <b>sports</b>. The most useful definitions are those that clarify the relationship of <b>sports</b> to play, games, and contests. “Play,” wrote the German theorist Carl Diem, “is purposeless activity, for its own sake, the opposite of work.” Humans work because they have to; they play because they want to. Play is autotelic—that ...",
		"source" : "https://<b>www.britannica.com</b>/<b>sports</b>/<b>sports</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 30,
		"query" : "sports",
		"title" : "Sports News: Get Latest News on Football, Cricket, Tennis, Hockey along ...",
		"url" : "https://indianexpress.com/section/sports/",
		"snippet" : "Latest <b>Sports</b> News: Get all news coverage on different <b>sports</b>, from Cricket to Football, Tennis, WWE along with latest updates on India vs Australia 2023, Border-Gavaskar Trophy, and Women&#39;s T20 World Cup 2023. View latest Photos and Videos of all <b>sports</b> events. Also get IND vs AUS live cricket score, analysis and match results at <b>The Indian Express</b>.",
		"source" : "https://<b>indianexpress.com</b>/section/<b>sports</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 31,
		"query" : "sports",
		"title" : "Sports A-Z - BBC Sport",
		"url" : "https://www.bbc.com/sport/all-sports",
		"snippet" : "The A-Z of <b>sports</b> covered by the BBC Sport team. Find all the latest live <b>sports</b> coverage, breaking news, results, scores, fixtures, tables, video and analysis on Football, Formula 1, Cricket ...",
		"source" : "https://<b>www.bbc.com</b>/sport/all-<b>sports</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 32,
		"query" : "sports",
		"title" : "Sports News, Latest Sports News, Sports News Headlines Today ...",
		"url" : "https://www.hindustantimes.com/sports",
		"snippet" : "<b>Sports</b> News - Check out latest <b>sports</b> news and headlines from Cricket, Football, Tennis, Badminton, <b>sports</b> coverage, live cricket score, match results and more at <b>Hindustan Times</b>",
		"source" : "https://<b>www.hindustantimes.com</b>/<b>sports</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 33,
		"query" : "sports",
		"title" : "Sports News: Latest Sports News headlines, Latest Match Scores, Cricket ...",
		"url" : "https://zeenews.india.com/sports",
		"snippet" : "Latest <b>sports</b> news at <b>Zee</b> News: Stay updated with the latest news from <b>sports</b> like football, cricket, tennis, golf, motor <b>sports</b> and others. See all the latest photos and videos of the recent sport events exclusively at <b>Zee</b> News. <b>Zee</b> News brings latest news from India and World on breaking news, today news headlines, politics, business, technology, bollywood, entertainment, <b>sports</b> and others. Find exclusive news stories on Indian politics, current affairs, cricket matches, festivals and events.",
		"source" : "https://<b>zeenews.india.com</b>/<b>sports</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 34,
		"query" : "sports",
		"title" : "Sports News Today: Sports Live News | Latest India Sports News On ...",
		"url" : "https://www.news18.com/sports/",
		"snippet" : "<b>SPORTS;</b> News. IPL 2023: Mohun Bagan Slam KKR Management, Claim Fans with Green-maroon Jersey were Denied at Eden Gardens. Golden Grand Prix 2023: India&#39;s Shaili Singh Places Third in Long Jump. Indian Women&#39;s Hockey Team Hold Australia 1-1 in Third Test Match But Lose Series 2-0. Sharath Kamal, Sathiyan Gnanasekaran Win Opening Matches at World Championships.",
		"source" : "https://www.news18.com/<b>sports</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 35,
		"query" : "sports",
		"title" : "Sky Sports - Sports News, Transfers, Scores | Watch Live Sport",
		"url" : "https://www.skysports.com/",
		"snippet" : "Watch the best live coverage of your favourite <b>sports</b>: Football, Golf, Rugby, Cricket, F1, Boxing, NFL, NBA, plus the latest <b>sports</b> news, transfers &amp; scores.",
		"source" : "https://<b>www.skysports.com</b>",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	},
	{
		"id" : 36,
		"query" : "sports",
		"title" : "The Sport - Used Sports Equipment for sale in Tadpatri | OLX",
		"url" : "https://www.olx.in/tadpatri_g4058584/sports-equipment_c100/q-the-sport",
		"snippet" : "Find the best The Sport price! The Sport for sale in Tadpatri. Buy and sell second hand <b>Sports</b> Equipment in Tadpatri. OLX provides the best Free Online Classified Advertising in India.",
		"source" : "https://www.olx.in/tadpatri_g4058584/<b>sports</b>-equipment_c100/q-the-sport",
		"image_urls" : "[]",
		"video_urls" : "[\"https://www.cbsnews.com/gooddaysacramento/video/sac-sports-card-expo/\", \"https://www.youtube.com/watch?v=luq4VjWVM4Y\", \"https://uk.sports.yahoo.com/news/10-killed-10-wounded-apparent-113155253.html\", \"https://sports.yahoo.com/highlights-larson-wins-nascar-star-015116751.html\", \"https://www.reuters.com/sports/cricket/hazlewood-deemed-fit-wtc-final-ashes-after-injury-scare-2023-05-22/\", \"https://www.msn.com/en-us/video/news/materazzi-plays-5-a-side/vi-AA1bwj4D\", \"https://www.msn.com/en-us/sports/nba/browns-remaining-roster-holes/vi-AA1bwbNS\", \"https://sports.yahoo.com/sb-405-freeway-shut-down-123807232.html\", \"https://sports.yahoo.com/does-mccarthy-deserve-hot-seat-125229704.html\", \"https://sports.yahoo.com/22-years-jay-z-pleaded-115522884.html\"]",
		"priority" : 0,
		"blocked" : 0
	}
 ];

export const Images = () => {
  const { data, setData } = useContext(SearchContext);


  const imageItems = data.map((data) => {
    const { id, title, url, image_urls } = data;
    const imageUrl = JSON.parse(image_urls)[0];
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

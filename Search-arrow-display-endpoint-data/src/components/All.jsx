import React, { useState, useEffect, useContext, useRef } from 'react';
import './All.css';
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


const ITEMS_PER_PAGE = 10;


function All() {
  const { data, setData } = useContext(SearchContext);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentPageData = data.sort((a, b) => b.priority - a.priority).slice(startIndex, endIndex);


  const location = useLocation();
  const searchQuery = location.state?.searchQuery;

  const prevSearchQueryRef = useRef('');


  const searchParams = new URLSearchParams({
    query: searchQuery,
  });

  useEffect(() => {
    if (searchQuery && searchQuery !== prevSearchQueryRef.current) {
      const formData = new FormData();
      formData.append('query', searchParams);

      fetch('http://127.0.0.1:5001/', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if(data !== null){
            setData(data);
            // Save data to local storage
            localStorage.setItem('myData', JSON.stringify(data));
          }
        })
        .catch(error => console.error(error))

      prevSearchQueryRef.current = searchQuery;
    } else {
      // Retrieve data from local storage and update the component's state if not already loaded
      const savedData = localStorage.getItem('myData');
      if (savedData && !dataLoaded) {
        setData(JSON.parse(savedData));
        setDataLoaded(true);
      }
    }
  }, [searchQuery, setData, dataLoaded]);

  useEffect(() => {
    // Save data to local storage before the component unmounts
    const saveDataToLocalstorage = () => {
      localStorage.setItem('myData', JSON.stringify(data));
    };

    window.addEventListener('beforeunload', saveDataToLocalstorage);

    return () => {
      window.removeEventListener('beforeunload', saveDataToLocalstorage);
    };
  }, [data]);

  const handleMoveUp = (index) => {
    // Get the relevant data for the API call
    const result_id = data[index].id; // Assuming you have an 'id' field in your data array

    // Make the API call
    fetch('http://127.0.0.1:5001/adjust', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: formData
      body: JSON.stringify({ result_id: result_id, action: 'up' }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.success) {
          // Move the record one step above in the data array
          const newData = [...data]; // Create a new array to avoid mutating the original data
          const movedRecord = newData.splice(index, 1)[0];
          newData.splice(index - 1, 0, movedRecord);

          // Update the state with the modified data array
          setData(newData);
        } else {
          // Handle the case when the API call was successful but the response indicates an error
          console.log('An error occurred during the move up operation.');
        }
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };


  const handleMoveDown = (index) => {
    // Logic to move the block down
    const result_id = data[index].id; // Assuming you have an 'id' field in your data array

    // Make the API call
    fetch('http://127.0.0.1:5001/adjust', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ result_id: result_id, action: 'down' }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.success) {
          // Move the record one step above in the data array
          const newData = [...data]; // Create a new array to avoid mutating the original data
          const movedRecord = newData.splice(index, 1)[0];
          newData.splice(index + 1, 0, movedRecord);

          // Update the state with the modified data array
          setData(newData);
        } else {
          // Handle the case when the API call was successful but the response indicates an error
          console.log('An error occurred during the move up operation.');
        }
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };

  const handleBlock = (index) => {
    const resultId = data[index].id; // Assuming you have an 'id' field in your data array

    // Make the API call to block the record
    fetch('http://127.0.0.1:5001/adjust', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ result_id: resultId, action: 'block' }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.success) {
          // Remove the blocked record from the data array
          const newData = data.filter((record, idx) => idx !== index);
          setData(newData);
        } else {
          // Handle the case when the API call was successful but the response indicates an error
          console.log('An error occurred during the block operation.');
        }
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };


  return (
    <div className="LinkTabs-container">
      <div className="LinkTabs-content">
        {currentPageData.map((page, index) => (
          <div className="LinkTabs-tabContent" key={index} >
            <p className="LinkTabs-url">{page.url}</p>
            <div className="LinkTabs-item">
              <a href={page.url} className="LinkTabs-title">{page.title}</a>
              <div className="LinkTabs-buttons">
                <IconButton variant="outlined" color="primary" size="small" onClick={() => handleMoveUp(index)}><ArrowUpwardIcon/></IconButton>
                <IconButton variant="outlined" color="primary" size="small" onClick={() => handleMoveDown(index)}><ArrowDownwardIcon/></IconButton>
                <IconButton variant="outlined" color="secondary" size="small" onClick={() => handleBlock(index)}><BlockRoundedIcon /></IconButton>
              </div>
            </div>
            <p className="LinkTabs-snippet">{page.snippet}</p>
          </div>
        ))}
      </div>
      <div className="Pagination">
        <div>

          <Stack direction="row" spacing={2}>
            <IconButton
              variant="contained"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ArrowBackIosNewOutlinedIcon/>
            </IconButton>
            <span>Page {currentPage}</span>
            <IconButton
              variant="contained"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={endIndex >= data.length}
            >
              <ArrowForwardIosOutlinedIcon/>
            </IconButton>
          </Stack>
        </div>
      </div>

    </div>
  );
}

export default All;

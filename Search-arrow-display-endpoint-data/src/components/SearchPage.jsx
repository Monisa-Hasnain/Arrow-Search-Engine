import React, { useState } from 'react';
import './SearchField.css';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';


const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm)
  };

  const handleSubmit = async (event) => {
    navigate("/all", { state: { searchQuery: searchTerm } })
  };

  return (
    <>
      <Typography
        variant="h5"
        component="h1"
        sx={{
          fontWeight: 700,
          letterSpacing: '0.05rem',
          textAlign: 'center',
          mt: 4,
          mb: 2,
          color: 'primary.main',
          fontFamily: 'monospace',
          textShadow: '1px 1px #000',
        }}
      >
        Don&apos;t let Big Tech decide what you can see.
      </Typography>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Arrow"
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          type="submit" >
          Search
        </button>
      </form>

      <Box sx={{ p: 2 }}>
        <Typography variant="h6" align="center">
          Privacy, simplified. Help Spread Arrow!
        </Typography>
      </Box>
    </>
  );
};

export default SearchPage;


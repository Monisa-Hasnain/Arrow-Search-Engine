import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const pages = ['ALL', 'NEW', 'IMAGES', 'VIDEOS','SHOPPINGS', 'MAPS'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm)
  };

  const handleSubmit = async (event) => {
    navigate("/all", { state: { searchQuery: searchTerm } })
  };


  const handleOpenNavMenu = (event) => {
    console.log(event.currentTarget)
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    // setAnchorElNav(null);

  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ARROW
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography onClick={() => navigate(page.toLowerCase())} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Arrow
          </Typography>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                />

            

            <TextField id="outlined-basic" label="Search" variant="outlined" onChange={handleChange} InputProps={{
                style: { color: 'white', display: 'block'} }}/>

            <Button onClick={handleSubmit} sx={{ mx: 1, my: 2, color: 'white', display: 'block' }}>Search</Button>


          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigate(page.toLowerCase())}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
    <AppBar position="static" color="default">
      <Toolbar sy={{ height: '10px' }}>
      {pages.map((page) => (
            <Button
            key={page}
            onClick={() => navigate(page.toLowerCase())}
            sx={{ color: 'black', display: 'block'}}
            >
            {page}
            </Button>
            ))}
      </Toolbar>
    </AppBar>
    </>
    
  );
}
export default Navbar;
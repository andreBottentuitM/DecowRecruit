import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../images/decowrecruit.png'
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

const pages = ['Home', 'Cadastre-se'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const drawerWidth = 240;

export function Navbar(props:any) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Stack direction="row" spacing={6} alignItems="center">
      <img src={Logo} width={130} alt="logotipo" />
      <IconButton>
      <CloseOutlinedIcon color='primary' fontSize='medium'/> 
      </IconButton>
      </Stack>
      </Typography>
      <Divider  color="black"/>
      <List>
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      <Button onClick={() => {

      }} variant="outlined" sx={{ display: { xs: 'flex', md: 'flex' }, mt:10}}>PROCURE POR CURRÍCULOS</Button>
      </List>

    </Box>
  );

  const handleCloseNavMenu = () => {
  
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <header>
    <AppBar style={{background:'white'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              textDecoration: 'none',
            }}
          >
            <img src={Logo} width={160} alt="logotipo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { sm: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Box component="nav">
            <Divider />
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'flex', sm: 'flex' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        
      </Box>
          </Box>
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
              width:'150px',
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            <img src={Logo} width={130} alt="logotipo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,index) => (
              
              <Button
              style={{color:'black'}}
                key={page}
                onClick={()=> {
                  index !== 0 ? navigate('/cadastro'): navigate('/')
                }}
                sx={{ my: 2, color: 'white', display: 'flex' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button variant="outlined" sx={{ display: { xs: 'none', md: 'block' }}}>PROCURE POR CURRÍCULOS</Button>

          <Box sx={{ flexGrow: 0 }}>
           
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </header>
  );
}



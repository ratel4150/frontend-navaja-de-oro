// src\components\organisms\BarberAppBar.tsx
'use client';

import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Badge,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  Popover,
  Button,
  Divider,
  Fade,
  
  Tooltip,
  
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  FaShoppingCart,
  FaUserCircle,

  FaBars,
  FaTrashAlt,
  
  FaHeart,
} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import { FaScissors } from 'react-icons/fa6';

const navItems = ['Inicio', 'Servicios', 'Productos', 'Nosotros', 'Contacto'];
const mockCartItems = [
  { name: 'Cera para Barba', price: 150 },
  { name: 'Pomada Firme', price: 200 },
];

const BarberAppBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const cartCount = mockCartItems.length;

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleCartClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'cart-popover' : undefined;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 16 : 0}
        sx={{
          background: darkMode
            ? 'rgba(0,0,0,0.75)'
            : 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(14px)',
          borderBottom: scrolled
            ? darkMode
              ? '1px solid rgba(255,255,255,0.1)'
              : '1px solid rgba(0,0,0,0.1)'
            : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" gap={2}>
            <FaScissors size={26} color={darkMode ? '#FFD700' : '#FF8C00'} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                background: darkMode
                  ? 'linear-gradient(45deg, #FFD700, #FF8C00)'
                  : 'linear-gradient(45deg, #000, #333)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Navaja de Oro
            </Typography>
          </Box>

          {!isMobile && (
            <Box display="flex" gap={3} alignItems="center">
              {navItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: darkMode ? '#F5F5F5' : '#111',
                      cursor: 'pointer',
                      fontWeight: 500,
                      '&:hover': {
                        color: '#FFD700',
                        textShadow: '0 0 6px #FFD700',
                      },
                    }}
                  >
                    {item}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          )}

          <Box display="flex" alignItems="center" gap={1}>
            <Tooltip title="Favoritos">
              <IconButton color="inherit">
                <FaHeart color={darkMode ? '#FF69B4' : '#C2185B'} size={18} />
              </IconButton>
            </Tooltip>

          {/*   <Tooltip title="Buscar">
              <IconButton color="inherit">
                <FaSearch />
              </IconButton>
            </Tooltip>
 */}
            <Tooltip title="Carrito">
              <IconButton onClick={handleCartClick}>
                <Badge badgeContent={cartCount} color="warning">
                  <FaShoppingCart  color='white'/>
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Perfil">
              <IconButton color="inherit">
                <FaUserCircle size={20} />
              </IconButton>
            </Tooltip>

           {/*  <Tooltip title="Modo oscuro">
              <IconButton onClick={toggleDarkMode}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </IconButton>
            </Tooltip> */}

            {isMobile && (
              <IconButton color="inherit" onClick={toggleDrawer}>
                <FaBars />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 300,
            height: '100%',
            bgcolor: darkMode ? '#0B0F2B' : '#fff',
            color: darkMode ? 'white' : '#111',
            backdropFilter: 'blur(16px)',
          }}
        >
          <Box display="flex" justifyContent="space-between" p={2}>
            <Typography variant="h6">Menú</Typography>
            <IconButton onClick={toggleDrawer}>
              <MdClose color={darkMode ? 'white' : 'black'} />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {navItems.map((text, i) => (
              <ListItem component={'button'} key={i}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Popover Cart */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCartClick}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        PaperProps={{
          sx: {
            background: darkMode ? 'rgba(0,0,0,0.8)' : '#fff',
            backdropFilter: 'blur(12px)',
            color: darkMode ? 'white' : '#111',
            boxShadow: '0 0 20px rgba(255,215,0,0.2)',
            borderRadius: 3,
            minWidth: 280,
          },
        }}
        TransitionComponent={Fade}
      >
        <Box p={2}>
          <Typography variant="subtitle1" mb={1}>
            Carrito
          </Typography>

          {mockCartItems.length === 0 ? (
            <Typography variant="body2">Tu carrito está vacío</Typography>
          ) : (
            <>
              {mockCartItems.map((item, idx) => (
                <Box
                  key={idx}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Typography fontSize="0.95rem">{item.name}</Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography color="#FFD700">${item.price}</Typography>
                    <IconButton size="small">
                      <FaTrashAlt size={14} color="red" />
                    </IconButton>
                  </Box>
                </Box>
              ))}

              <Divider sx={{ my: 1 }} />

              <Typography fontWeight="bold">
                Total: ${mockCartItems.reduce((acc, item) => acc + item.price, 0)}
              </Typography>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  background: 'linear-gradient(45deg, #FFD700, #FF8C00)',
                  color: '#000',
                  fontWeight: 'bold',
                  borderRadius: 8,
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FF8C00, #FFD700)',
                  },
                }}
              >
                Finalizar compra
              </Button>
            </>
          )}
        </Box>
      </Popover>
    </>
  );
};

export default BarberAppBar;

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Container, Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import './NavbarSite.css';

export const NavbarSite = () => {
  const location = useLocation();
  return (
    <>
      <Box className="lista-espacamento">
        <Link
          to="/"
          className={
            location.pathname == '/' ? 'lista-active-link' : 'lista-normal-link'
          }
        >
          Dashboard
        </Link>
        <Link
          to="/products"
          className={
            location.pathname == '/products'
              ? 'lista-active-link'
              : 'lista-normal-link'
          }
        >
          Products
        </Link>
        <Link
          to="/about"
          className={
            location.pathname == '/about'
              ? 'lista-active-link'
              : 'lista-normal-link'
          }
        >
          About
        </Link>
        <Link to="/cars" className="car-icon">
          <ShoppingCartIcon
            className={
              location.pathname == '/cars'
                ? 'lista-active-link'
                : 'lista-normal-link'
            }
            fontSize="medium"
          />
        </Link>
      </Box>
      <Box className="background-dashborad text-dashboard">
        <Container>
          <Grid item>
            <h1>Bem Vindo</h1>
            <p>Seja bem vindoa nossa loja, aqui você cliente vem primeiro!</p>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

import { Box, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './NavbarSite.css';

export const NavbarSite = () => {
  return (
    <>
      <Box className="lista-espacamento">
        <Link to="/">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
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

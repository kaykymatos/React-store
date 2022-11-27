import { Container, Grid } from '@mui/material';

export const NotFoundRout = () => {
  return (
    <Container maxWidth="xl" sx={{ paddingBottom: 20, paddingTop: 20 }}>
      <Grid spacing={3} container justifyContent="center" alignItems="center">
        <h1>Rota nao encontrada!</h1>
      </Grid>
    </Container>
  );
};

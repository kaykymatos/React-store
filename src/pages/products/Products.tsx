import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductCards } from '../../shared/components';
import { ApiException } from '../../shared/services/api/ApiException';
import { CarServices, ICars } from '../../shared/services/api/cars/CarServices';

export const Products = () => {
  const [listaProdutos, setListaProdutos] = useState<ICars[]>();

  useEffect(() => {
    CarServices.getAllCars().then((result) => {
      if (result instanceof ApiException) {
        alert('Erro no carregamento das informações');
      } else {
        setListaProdutos(result);
      }
    });
  }, []);
  return (
    <Container maxWidth="xl" sx={{ paddingBottom: 5, paddingTop: 5 }}>
      <Grid spacing={3} container justifyContent="center" alignItems="center">
        {listaProdutos?.map((listItem) => {
          return (
            <Grid item key={listItem.id} sm={6} xs={12} lg={3} md={3} xl={3}>
              <ProductCards
                altImg={listItem.altImg}
                cardDescription={listItem.description}
                cardTitle={listItem.title}
                img={listItem.imgUrl}
                price={listItem.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { ProductCards } from '../../shared/components';
import { ApiException } from '../../shared/services/api/ApiException';
import { CarServices, ICars } from '../../shared/services/api/cars/CarServices';

export const Products = () => {
  const { data, isLoading } = useQuery<ICars[] | ApiException>(
    ['cars', 1],
    () => CarServices.getAllCars()
  );

  if (isLoading) {
    return <div>Carregando</div>;
  } else if (data instanceof ApiException) {
    return <>Eerro no servidor</>;
  } else {
    return (
      <Container maxWidth="xl" sx={{ paddingBottom: 5, paddingTop: 5 }}>
        <Grid spacing={3} container justifyContent="center" alignItems="center">
          {data?.map((listItem) => {
            return (
              <Grid item key={listItem.id} sm={6} xs={12} lg={3} md={3} xl={3}>
                <ProductCards
                  codigo={listItem.id}
                  altImg={listItem.altImg}
                  cardDescription={listItem.description}
                  cardTitle={listItem.title}
                  img={listItem.imgUrl[0]}
                  price={listItem.price}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }
};

import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { ProductCards } from '../../shared/components';
import { ApiException } from '../../shared/services/api/ApiException';
import { CarServices, ICars } from '../../shared/services/api/cars/CarServices';
import './Deshboard.css';

export const Deshboard = () => {
  const [listaProdutos, setListaProdutos] = useState<ICars[]>();
  const images: string[] = [
    require('./img/bolsa.jpg'),
    require('./img/bone.jpg'),
    require('./img/camiseta.jpg'),
    require('./img/jaqueta.jpg'),
    require('./img/mochila.jpg'),
    require('./img/luvas.jpg'),
    require('./img/tenis.jpg'),
    require('./img/oculos.jpg'),
  ];
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
    <div>
      <Grid className="backgroudn-color-dashboard">
        <Grid
          spacing={0}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          container
          justifyContent="center"
          alignItems="center"
        >
          <h1>Store.com</h1>
        </Grid>
        <Grid
          spacing={0}
          className="text-informations"
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          pt={0}
          pb={5}
          container
          justifyContent="center"
          alignItems="center"
        >
          <p>store.com o melhor site com as melhores ofertas.</p>
          <p>Colocamos sempre o cliente em primeiro lugar</p>
        </Grid>
      </Grid>
      <Container maxWidth="xl" sx={{ paddingBottom: 5, paddingTop: 5 }}>
        <Grid spacing={3} container justifyContent="center" alignItems="center">
          {listaProdutos?.map((listItem) => {
            return (
              <Grid item key={listItem.id} sm={6} xs={12} lg={3} md={3} xl={3}>
                <ProductCards
                  altImg={listItem.altImg}
                  cardDescription={listItem.description}
                  cardTitle={listItem.title}
                  img={images[listItem.id-1]}
                  price={listItem.price}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

import { Container, Grid } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { BuyCarCards } from '../../shared/components';
import { ApiException } from '../../shared/services/api/ApiException';
import { CarServices, ICars } from '../../shared/services/api/cars/CarServices';

export const Car = () => {
  const [listaProdutos, setListaProdutos] = useState<ICars[]>();

  useEffect(() => {
    CarServices.getAllBuyCars().then((result) => {
      if (result instanceof ApiException) {
        alert('Erro no carregamento das informações');
      } else {
        setListaProdutos(result);
      }
    });
  }, []);

  const handleDelet = useCallback((id: number) => {
    CarServices.deleteBuyCar(id).then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setListaProdutos((oldLista) => {
          return oldLista?.filter((oldListItem) => oldListItem.id !== id);
        });
      }
    });
  }, []);

  return (
    <div>
      <Grid className="backgroudn-color-dashboard">
        <Grid spacing={0} container justifyContent="center" alignItems="center">
          <h1>Store.com</h1>
        </Grid>
        <Grid
          spacing={0}
          className="text-informations"
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
                <BuyCarCards
                  productId={listItem.id}
                  onClickDelete={() => handleDelet(listItem.id)}
                  productAltImage={listItem.altImg}
                  productDescription={listItem.description}
                  productName={listItem.title}
                  productUrlImage={listItem.imgUrl}
                  productPrice={listItem.price}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

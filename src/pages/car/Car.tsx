import { Container, Grid } from '@mui/material';
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { BuyCarCards } from '../../shared/components';
import { ApiException } from '../../shared/services/api/ApiException';
import { CarServices, ICars } from '../../shared/services/api/cars/CarServices';

export const Car = () => {
  const { data, refetch } = useQuery<ICars[] | ApiException>(
    'buy_cars',
    async () => {
      const response = await CarServices.getAllBuyCars();
      return response;
    }
  );
  const handleDelet = useCallback((id: number) => {
    CarServices.deleteBuyCar(id).then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        refetch();
      }
    });
  }, []);

  const findSumUsingMap = () => {
    let valuePay = 0;
    if (data instanceof ApiException) {
      return { pay: 0, totalItens: 0 };
    } else {
      data?.map(({ price }) => (valuePay = valuePay + price));
      return { pay: valuePay.toFixed(2), totalItens: data?.length };
    }
  };
  const allValuesPay = findSumUsingMap();
  if (data instanceof ApiException) {
    return <div>Erro</div>;
  } else {
    return (
      <div>
        <Grid className="backgroudn-color-dashboard">
          <Grid
            spacing={0}
            container
            justifyContent="center"
            alignItems="center"
          >
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
          <Grid
            spacing={3}
            container
            justifyContent="center"
            alignItems="center"
          >
            {data?.map((listItem) => {
              return (
                <Grid
                  item
                  key={listItem.id}
                  sm={6}
                  xs={12}
                  lg={3}
                  md={3}
                  xl={3}
                >
                  <BuyCarCards
                    productId={listItem.id}
                    onClickDelete={() => handleDelet(listItem.id)}
                    productAltImage={listItem.altImg}
                    productDescription={listItem.description}
                    productName={listItem.title}
                    productUrlImage={listItem.imgUrl[0]}
                    productPrice={listItem.price}
                  />
                </Grid>
              );
            })}
          </Grid>
          <h1>Total a pagar: R${allValuesPay.pay}</h1>
          <h1>Quantidadede itens: {allValuesPay.totalItens}</h1>
        </Container>
      </div>
    );
  }
};

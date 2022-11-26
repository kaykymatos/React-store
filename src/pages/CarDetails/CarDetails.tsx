import { Box, Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiException } from '../../shared/services/api/ApiException';
import { CarServices, ICars } from '../../shared/services/api/cars/CarServices';

export const CarDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState<ICars>();
  useEffect(() => {
    CarServices.getOneCar(Number(id)).then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setProductDetails(result);
      }
    });
  }, []);

  return (
    <Container maxWidth="xl" sx={{ paddingBottom: 5, paddingTop: 5 }}>
      <Grid spacing={3} container justifyContent="center" alignItems="center">
        <Grid item sm={12} xs={12} lg={4} md={4} xl={4}>
          <img
            src={productDetails?.imgUrl[0]}
            alt={productDetails?.altImg}
            title={productDetails?.altImg}
            width="100%"
          />
        </Grid>
        <Grid item sm={12} xs={12} lg={4} md={4} xl={4}>
          <h1>{productDetails?.title}</h1>
          <Box>{productDetails?.description}</Box>
          <span>R${productDetails?.price.toFixed(2)}</span>
        </Grid>
        <Grid item sm={12} xs={12} lg={4} md={4} xl={4}>
          {productDetails?.imgUrl.map(() => {
          
            return (
              <Grid
                item
                key={Math.random()}
                sx={{ margin: 2 }}
                sm={12}
                xs={12}
                lg={2}
                md={2}
                xl={2}
              >
                <img
                  src={productDetails.imgUrl[0]}
                  width="100%"
                  alt={productDetails.altImg}
                  title={productDetails.altImg}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

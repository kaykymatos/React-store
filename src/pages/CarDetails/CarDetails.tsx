import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
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
            src={productDetails?.imgUrl}
            alt={productDetails?.altImg}
            title={productDetails?.altImg}
            width="100%"
          />
        </Grid>
        <Grid item sm={12} xs={12} lg={8} md={8} xl={8}>
          <h1>{productDetails?.title}</h1>
          <Box>{productDetails?.description}</Box>
          <span>{productDetails?.price.toFixed(2)}</span>
        </Grid>
      </Grid>
    </Container>
  );
};

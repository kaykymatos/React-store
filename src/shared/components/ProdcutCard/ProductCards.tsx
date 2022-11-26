import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import './ProductCards.css';
import { useCallback } from 'react';
import { CarServices } from '../../services/api/cars/CarServices';
import { ApiException } from '../../services/api/ApiException';
import { useNavigate } from 'react-router-dom';

export interface ProductCardsProps {
  img: string;
  altImg: string;
  cardTitle: string;
  cardDescription: string;
  price: number;
  codigo: number;
}
export const ProductCards = ({
  img,
  altImg,
  cardTitle,
  cardDescription,
  price,
  codigo,
}: ProductCardsProps) => {
  const handlelickBuyCar = useCallback(() => {
    CarServices.buyProduct(codigo).then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        alert('Compre o item foi adicionado ao carinho! Item: ' + result.title);
      }
    });
  }, []);

  const navigate = useNavigate();
  const handlelickInfoCar = useCallback(() => {
    CarServices.getOneCar(codigo).then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        navigate(`cars/${result.id}`);
      }
    });
  }, []);

  return (
    <Container
      className="shadow-container prouct-card-houver"
      sx={{ backgroundColor: '#FFFFFF', paddingTop: 1, borderRadius: 3 }}
    >
      <Box
        className="container-card"
        sx={{ maxWidth: 331, height: 300, marginTop: 2 }}
      >
        <CardMedia
          sx={{ borderRadius: 3 }}
          component="img"
          height="140"
          image={img}
          alt={altImg}
          title={altImg}
        />
        <CardContent className="text-card ">
          <Typography gutterBottom variant="h5" component="div">
            {cardTitle}
          </Typography>
          <Typography color="text.secondary">{cardDescription}</Typography>
        </CardContent>
      </Box>
      <Typography
        gutterBottom
        className="price-and-links"
        variant="h5"
        sx={{ color: '#08FF00', marginLeft: 2 }}
        component="div"
      >
        R${price.toFixed(2)}
        <CardActions sx={{ marginLeft: 0 }}>
          <Button onClick={handlelickBuyCar} title="Comprar">
            <ShoppingCartIcon />
          </Button>
          <Button onClick={handlelickInfoCar} title="Info">
            <InfoIcon />
          </Button>
        </CardActions>
      </Typography>
    </Container>
  );
};

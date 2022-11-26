import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import './BuyCarCards.css';

interface IBuyCarCardsProps {
  productName: string;
  productPrice: number;
  productDescription: string;
  productAltImage: string;
  productUrlImage: string;
}
export const BuyCarCards = ({
  productDescription,
  productName,
  productPrice,
  productAltImage,
  productUrlImage,
}: IBuyCarCardsProps) => {
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
          image={productUrlImage}
          alt={productAltImage}
          title={productAltImage}
        />
        <CardContent className="text-card ">
          <Typography gutterBottom variant="h5" component="div">
            {productName}
          </Typography>
          <Typography color="text.secondary">{productDescription}</Typography>
        </CardContent>
      </Box>
      <Typography
        gutterBottom
        className="price-and-links"
        variant="h5"
        sx={{ color: '#08FF00', marginLeft: 2 }}
        component="div"
      >
        R${productPrice.toFixed(2)}
      </Typography>
    </Container>
  );
};

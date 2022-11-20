import {
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Link,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import './ProductCards.css';

interface IProductCardsProps {
  img: string;
  altImg: string;
  cardTitle: string;
  cardDescription: string;
  price: string;
}
export const ProductCards = ({
  img,
  altImg,
  cardTitle,
  cardDescription,
  price,
}: IProductCardsProps) => {
  return (
    <Container
      className="shadow-container"
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
        R${price}
        <CardActions sx={{ marginLeft: 0 }}>
          <Link href="#" title="Comprar">
            <ShoppingCartIcon />
          </Link>
          <Link href="#" title="Info">
            <InfoIcon />
          </Link>
        </CardActions>
      </Typography>
    </Container>
  );
};

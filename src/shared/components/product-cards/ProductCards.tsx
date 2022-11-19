import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material"
import { Box } from "@mui/system"
import "./ProductCards.css"

interface IProductCardsProps {
    img: string
    altImg: string
    cardTitle: string
    cardDescription: string
    price: string
}
export const ProductCards: React.FC<IProductCardsProps> = ({ img, altImg, cardTitle, cardDescription, price }) => {

    return (
        <Container className="shadow-container" sx={{backgroundColor:"#FFFFFF", paddingTop:1, borderRadius:3}}>
            <Box sx={{ maxWidth: 331, height: 300, marginTop: 2 }} >
                <CardMedia sx={{borderRadius:3}}
                    component="img"
                    height="140"
                    image={img}
                    alt={altImg}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {cardTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {cardDescription}
                    </Typography>
                </CardContent>

            </Box>
                <Typography gutterBottom variant="h5" sx={{ color: "#08FF00" ,marginLeft:2}} component="div">
                    R${price}
                    <CardActions sx={{marginLeft:0}}>
                    <Button >Share</Button>
                    <Button >Learn More</Button>
                </CardActions>
                </Typography>
               
        </Container>
        
    )
}
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

interface IProductCardsProps{
    img:string
    altImg:string
    cardTitle:string
    cardDescription:string
}
export const ProductCards:React.FC<IProductCardsProps> = ({img, altImg,cardTitle,cardDescription}) => {
    return (
        <Card sx={{ maxWidth: 331, marginTop: 2 }} >
            <CardMedia
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
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}
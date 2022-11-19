import { Box, Container, Grid } from "@mui/material";
import { ProductCards } from "../../shared/components";

export const Products=()=>{
 
        const logo = require('./img/car.jpg');
        return (
            <>
                    <Container maxWidth="xl" sx={{paddingBottom:5, paddingTop:5}}  >
                        <Grid spacing={3} container justifyContent="center" alignItems="center">
                            <Grid item sm={6} xs={12} lg={3} md={3} xl={3} >
                                <ProductCards
                                    cardTitle="Card Title"
                                    cardDescription="Description"
                                    altImg="Image description"
                                    img={String(logo)} price="1000"
                                />
    
                            </Grid>
                            <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
                                <ProductCards
                                    cardTitle="Card Title"
                                    cardDescription="Description"
                                    altImg="Image description"
                                    img={String(logo)} price="1000"
                                />
                            </Grid>
                            <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
                                <ProductCards
                                    cardTitle="Card Title"
                                    cardDescription="Description"
                                    altImg="Image description"
                                    img={String(logo)} price="1000"
                                />
                            </Grid>
                            <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
                                <ProductCards
                                    cardTitle="Card Title"
                                    cardDescription="Description"
                                    altImg="Image description"
                                    img={String(logo)} price="1000"
                                />
                            </Grid>
    
    
                            <Grid item sm={6} xs={12} lg={3} md={3} xl={3} >
                                <ProductCards
                                    cardTitle="Card Title"
                                    cardDescription="Description"
                                    altImg="Image description"
                                    img={String(logo)} price="1000"
                                />
    
                            </Grid>
                            <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
                                <ProductCards
                                    cardTitle="Card Title"
                                    cardDescription="Description"
                                    altImg="Image description"
                                    img={String(logo)} price="1000"
                                />
                            </Grid>
                            <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
                                <ProductCards
                                    cardTitle="Card Title"
                                    cardDescription="Description"
                                    altImg="Image description"
                                    img={String(logo)} price="1000"
                                />
                            </Grid>
                            <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
                                <ProductCards
                                    cardTitle="Card Title"
                                    cardDescription="Description"
                                    altImg="Image description"
                                    img={String(logo)} price="1000"
                                />
                            </Grid>
                        </Grid>
                    </Container>
    
            </>
        )
}
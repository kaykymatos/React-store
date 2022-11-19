import "./Deshboard.css"
import { ProductCards } from "../../shared/components";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";

export const Deshboard = () => {
    const logo = require('./img/car.jpg');
    return (
        <>
            <Box className="background-dashborad text-dashboard">
                <Container maxWidth="xl" >
                    <Grid item  >
                        <h1>Welcome</h1>
                        <p>This is for you, here you can buy a lot of products</p>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Container maxWidth="xl"  >
                    <Grid spacing={3} container justifyContent="center" alignItems="center">
                        <Grid item sm={6} xs={12} lg={3} md={3} xl={3} >
                            <ProductCards
                                cardTitle="Card Title"
                                cardDescription="Description"
                                altImg="Image description"
                                img={String(logo)}
                            />

                        </Grid>
                        <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
                            <ProductCards
                                cardTitle="Card Title"
                                cardDescription="Description"
                                altImg="Image description"
                                img={String(logo)}
                            />
                        </Grid>
                        <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
                            <ProductCards
                                cardTitle="Card Title"
                                cardDescription="Description"
                                altImg="Image description"
                                img={String(logo)}
                            />
                        </Grid>
                        <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
                            <ProductCards
                                cardTitle="Card Title"
                                cardDescription="Description"
                                altImg="Image description"
                                img={String(logo)}
                            />
                        </Grid>


                        <Grid item sm={6} xs={12} lg={3} md={3} xl={3} >
                            <ProductCards
                                cardTitle="Card Title"
                                cardDescription="Description"
                                altImg="Image description"
                                img={String(logo)}
                            />

                        </Grid>
                        <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
                            <ProductCards
                                cardTitle="Card Title"
                                cardDescription="Description"
                                altImg="Image description"
                                img={String(logo)}
                            />
                        </Grid>
                        <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
                            <ProductCards
                                cardTitle="Card Title"
                                cardDescription="Description"
                                altImg="Image description"
                                img={String(logo)}
                            />
                        </Grid>
                        <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
                            <ProductCards
                                cardTitle="Card Title"
                                cardDescription="Description"
                                altImg="Image description"
                                img={String(logo)}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </>
    )
}
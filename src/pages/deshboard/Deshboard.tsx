import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { ProductCards } from '../../shared/components';
import './Deshboard.css';

export const Deshboard = () => {
  const images: string[] = [
    require('./img/bolsa.jpg'),
    require('./img/bone.jpg'),
    require('./img/camiseta.jpg'),
    require('./img/jaqueta.jpg'),
    require('./img/mochila.jpg'),
    require('./img/luvas.jpg'),
    require('./img/tenis.jpg'),
    require('./img/oculos.jpg'),
  ];

  return (
    <>
      <Grid className="backgroudn-color-dashboard">
        <Grid
          spacing={0}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          container
          justifyContent="center"
          alignItems="center"
        >
          <h1>Store.com</h1>
        </Grid>
        <Grid
          spacing={0}
          className="text-informations"
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
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
        <Grid spacing={3} container justifyContent="center" alignItems="center">
          <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
            <ProductCards
              cardTitle="Bolsa Feminina"
              cardDescription="Bolsa feminina, perfeita para sair, design único"
              altImg="Bolsa Feminina"
              img={images[0]}
              price="100,00"
            />
          </Grid>
          <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
            <ProductCards
              cardTitle="Boné"
              cardDescription="Para que gosta de um bo boné a escolha perfeita é esse, um boné com um ótimo material e muito estiloso"
              altImg="Boné"
              img={images[1]}
              price="49,99"
            />
          </Grid>
          <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
            <ProductCards
              cardTitle="Camiseta branca"
              cardDescription="Uma linda camiseta branca para voce poder sair ese divertir com seus amigos e familiares"
              altImg="Camiseta branca"
              img={images[2]}
              price="29,99"
            />
          </Grid>
          <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
            <ProductCards
              cardTitle="Jaqueta"
              cardDescription="Jaqueta de couro original, estilosa, coloração preto escuro"
              altImg="Jaqueta"
              img={images[3]}
              price="59,99"
            />
          </Grid>
          <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
            <ProductCards
              cardTitle="Bolsa"
              cardDescription="Bolsa escolar com um design incrivele alta resistencia"
              altImg="Bolsa"
              img={images[4]}
              price="69,99"
            />
          </Grid>
          <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
            <ProductCards
              cardTitle="Luvas"
              cardDescription="Luvas vermelhas, estachegando o natal, pege o seu paragora, luvas de couro lindas"
              altImg="Luvas"
              img={images[5]}
              price="10,99"
            />
          </Grid>
          <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
            <ProductCards
              cardTitle="Tênis"
              cardDescription="Tênis laranja com cadarso branco, para voce que gota de chegar no estilo nas festas"
              altImg="Tênis"
              img={images[6]}
              price="24,99"
            />
          </Grid>
          <Grid item sm={6} xs={12} lg={3} md={3} xl={3}>
            <ProductCards
              cardTitle="Óculos de sol"
              cardDescription="Óculos de sol para voce que gosta de ir para a praia ou usar óculos de sol"
              altImg="Óculos de Sol"
              img={images[7]}
              price="30,00"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

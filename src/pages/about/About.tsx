import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import './About.css';

export const About = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const TextoImagem1 = () => {
    return (
      <>
        <p>
          Aqui na store.com nós colocamos sempre o cliente em primeiro lugar,
          sempre com as melhores escolhas de produtos e preços únicos que você
          só emcontra aqui.
        </p>
        <p>
          Sempre buscamos deixar o cliente o mais confortável possível pois aqui
          cliente sempre vem em primeiro lugar
        </p>
      </>
    );
  };
  const TextoImagem2 = () => {
    return (
      <>
        <p>
          Trabalhamos com técnologia, mesmo longe estamos perto de você para
          poder lhe atender da melhor maneira possível independente da ocasião.
        </p>
        <p>
          Sempre mantemos nosos clientes informados a respeio de promoçoes,
          novos itens e muito mais coisas, nossa equipe comercial sempre entrega
          o melhor aos clientes da store.com
        </p>
      </>
    );
  };
  const TextoImagem3 = () => {
    return (
      <>
        <p>
          Store.com ajudando você a vconhecer novos horizontes, inovações, e
          muito mais para que você possa viajar pelo mundo, ficar confortável e
          estiloso
        </p>
      </>
    );
  };

  const images: string[] = [
    require('./img/sala.jpg'),
    require('./img/tecnologia.jpg'),
    require('./img/horizonte.jpg'),
  ];
  return (
    <Container maxWidth="xl" sx={{ paddingBottom: 5, paddingTop: 5 }}>
      <Grid
        className="grid-style"
        spacing={3}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={12} xs={12} lg={6} md={6} xl={6}>
          <img src={images[0]} width="100%" alt="teste" />
        </Grid>
        <Grid item sm={12} xs={12} lg={6} md={6} xl={6}>
          <Box>{<TextoImagem1 />}</Box>
        </Grid>
        <Grid
          hidden={isMobile ? true : false}
          item
          sm={12}
          xs={12}
          lg={6}
          md={6}
          xl={6}
        >
          <Box>{<TextoImagem2 />}</Box>
        </Grid>
        <Grid item sm={12} xs={12} lg={6} md={6} xl={6}>
          <Box>
            <img src={images[1]} width="100%" alt="teste" />
          </Box>
        </Grid>
        <Grid
          hidden={isMobile ? false : true}
          item
          sm={12}
          xs={12}
          lg={6}
          md={6}
          xl={6}
        >
          <Box>{<TextoImagem2 />}</Box>
        </Grid>
        <Grid item sm={12} xs={12} lg={6} md={6} xl={6}>
          <img src={images[2]} width="100%" alt="teste" />
        </Grid>
        <Grid item sm={12} xs={12} lg={6} md={6} xl={6}>
          <Box>{<TextoImagem3 />}</Box>
        </Grid>
      </Grid>
    </Container>
  );
};

import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { useQuery } from 'react-query';
import { ProductCards } from '../../shared/components';
import { ApiException } from '../../shared/services/api/ApiException';
import { CarServices, ICars } from '../../shared/services/api/cars/CarServices';
import './Dashboard.css';

export const Dashboard = () => {
  const { data, isLoading } = useQuery<ICars[] | ApiException>(
    ['cars', 1],
    () => CarServices.getAllCars()
  );

  if (isLoading) {
    return <div>Carregando</div>;
  } else if (data instanceof ApiException) {
    return <>Eerro no servidor</>;
  } else {
    return (
      <div>
        <Grid className="backgroudn-color-dashboard">
          <Grid
            spacing={0}
            container
            justifyContent="center"
            alignItems="center"
          >
            <h1>Store.com</h1>
          </Grid>
          <Grid
            spacing={0}
            className="text-informations"
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
          <Grid
            spacing={3}
            container
            justifyContent="center"
            alignItems="center"
          >
            {data?.map((listItem) => {
              return (
                <Grid
                  item
                  key={listItem.id}
                  sm={6}
                  xs={12}
                  lg={3}
                  md={3}
                  xl={3}
                >
                  <ProductCards
                    codigo={listItem.id}
                    altImg={listItem.altImg}
                    cardDescription={listItem.description}
                    cardTitle={listItem.title}
                    img={listItem.imgUrl[0]}
                    price={listItem.price}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  }
};

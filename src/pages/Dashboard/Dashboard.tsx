import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { ProductCards } from '../../shared/components';
import { PageTabs } from '../../shared/components/PageTabs/PageTabs';
import { ApiException } from '../../shared/services/api/ApiException';
import { CarServices, ICars } from '../../shared/services/api/cars/CarServices';
import './Dashboard.css';

export const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const { data, isLoading, isError } = useQuery<ICars[] | ApiException>(
    'cars',
    async () => {
      const response = await CarServices.getAllCars();
      return response;
    }
  );
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  if (data instanceof ApiException) {
    return <>Erro no servidor</>;
  } else {
    const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
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
          <section id="products">
            <Grid
              spacing={3}
              container
              justifyContent="center"
              alignItems="center"
            >
              {isLoading && <p>Carregando...</p>}
              {isError && <p>Erro no servidor!</p>}

              {currentPosts?.map((listItem) => {
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
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <PageTabs
                postsPerPage={postsPerPage}
                totalPosts={data?.length}
                paginate={paginate}
              />
            </Grid>
          </section>
        </Container>
      </div>
    );
  }
};

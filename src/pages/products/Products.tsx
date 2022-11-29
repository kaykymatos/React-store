import { Container, Grid } from '@mui/material';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { ProductCards } from '../../shared/components';
import { PageTabs } from '../../shared/components/PageTabs/PageTabs';
import { ApiException } from '../../shared/services/api/ApiException';
import { CarServices, ICars } from '../../shared/services/api/cars/CarServices';

export const Products = () => {
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
      <Container maxWidth="xl" sx={{ paddingBottom: 5, paddingTop: 5 }}>
        <Grid spacing={3} container justifyContent="center" alignItems="center">
          {isLoading && <p>Carregando...</p>}
          {isError && <p>Erro No servidor</p>}
          {currentPosts?.map((listItem) => {
            return (
              <Grid item key={listItem.id} sm={6} xs={12} lg={3} md={3} xl={3}>
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
        </Grid>
      </Container>
    );
  }
};

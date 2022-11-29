import { Grid, Tab } from '@mui/material';

interface IPageTabsProps {
  postsPerPage: number;
  totalPosts?: number;
  paginate: (nu: number) => void;
}

export const PageTabs = ({
  postsPerPage,
  totalPosts,
  paginate,
}: IPageTabsProps) => {
  const pageNumbers = [];
  if (totalPosts == undefined) {
    totalPosts = 1;
  }
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.map((number) => (
        <Grid
          key={number}
          lg={3}
          xl={3}
          justifyContent="center"
          alignItems="center"
        >
          <a onClick={() => paginate(number)} href="#products">
            <Tab label={number} />
          </a>
        </Grid>
      ))}
    </>
  );
};

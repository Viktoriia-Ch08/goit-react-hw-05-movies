import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './Layout.styled';
import { Suspense } from 'react';
import { BounceLoader } from 'react-spinners';
import { Wrapper } from 'pages/Home/Home.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense
        fallback={
          <Wrapper>
            <BounceLoader
              className="loader"
              loading={true}
              color={'#751975'}
              size={80}
            />
          </Wrapper>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;

import { useLocation } from 'react-router-dom';
import defaultImg from '../../images/not-found-img.jpg';
import { Container, Image, LinkToHome } from './NotFound.styled';

const NotFound = () => {
  const location = useLocation();
  const backHomeLink = location.state?.from ?? '/';

  return (
    <Container>
      <Image src={defaultImg} alt="Smth went wrong" width={'200px'} />
      <LinkToHome to={backHomeLink}>Return Home</LinkToHome>
    </Container>
  );
};

export default NotFound;

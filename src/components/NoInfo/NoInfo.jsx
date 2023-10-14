import noInfoImg from '../../images/no-results.png';
import { Container, NoResultImg, Text } from './NoInfo.styled';

const NoInfo = () => {
  return (
    <Container>
      <NoResultImg src={noInfoImg} alt="No info" />
      <Text>Sorry, results not found</Text>
    </Container>
  );
};

export default NoInfo;

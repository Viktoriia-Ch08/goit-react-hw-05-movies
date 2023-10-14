import { useEffect, useState } from 'react';
import { getReviews } from 'services/movies-api';
import ReviewsListItem from './ReviewsListItem/ReviewsListItem';
import NoInfo from 'components/NoInfo/NoInfo';
import { BounceLoader } from 'react-spinners';
import { Wrapper } from 'components/Cast/CastList.styled';
import { showError } from 'services/notification';
import { List } from './ReviewsList.styled';

const ReviewsList = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviewsInfo = await getReviews(id);
        setReviews(reviewsInfo.results);
      } catch (error) {
        showError(error.message);
      } finally {
        setLoader(false);
      }
    }

    fetchReviews();
  }, [id]);

  return (
    <Wrapper>
      <BounceLoader
        className="loader"
        loading={loader}
        color={'#751975'}
        size={80}
      />
      {!loader && (
        <List>
          {reviews.length ? (
            reviews.map(({ id, author, content }) => {
              return (
                <ReviewsListItem key={id} author={author} content={content} />
              );
            })
          ) : (
            <NoInfo />
          )}
        </List>
      )}
    </Wrapper>
  );
};

export default ReviewsList;

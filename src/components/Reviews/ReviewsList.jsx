import { useEffect, useState } from 'react';
import { getReviews } from 'services/movies-api';
import ReviewsListItem from './ReviewsListItem/ReviewsListItem';
import NoInfo from 'components/NoInfo/NoInfo';

const ReviewsList = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function fetchReviews() {
      const reviewsInfo = await getReviews(id);
      setReviews(reviewsInfo.results);
    }

    fetchReviews();
  }, [id]);

  return (
    <ul>
      {reviews.length ? (
        reviews.map(({ id, author, content }) => {
          return <ReviewsListItem key={id} author={author} content={content} />;
        })
      ) : (
        <NoInfo />
      )}
    </ul>
  );
};

export default ReviewsList;

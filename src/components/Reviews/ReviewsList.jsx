import { useEffect, useState } from 'react';
import { getReviews } from 'services/movies-api';
import ReviewsListItem from './ReviewsListItem/ReviewsListItem';
import NoInfo from 'components/NoInfo/NoInfo';
import { BounceLoader } from 'react-spinners';

const ReviewsList = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    async function fetchReviews() {
      const reviewsInfo = await getReviews(id);
      setReviews(reviewsInfo.results);
      setLoader(false);
    }

    fetchReviews();
  }, [id]);

  return (
    <>
      <BounceLoader
        className="loader"
        loading={loader}
        color={'#751975'}
        size={80}
      />
      {!loader && (
        <ul>
          {reviews.length ? (
            reviews.map(({ id, author, content }) => {
              return (
                <ReviewsListItem key={id} author={author} content={content} />
              );
            })
          ) : (
            <NoInfo />
          )}
        </ul>
      )}
    </>
  );
};

export default ReviewsList;

const ReviewsListItem = ({ id, author, content }) => {
  return (
    <li>
      <p>{id}</p>
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsListItem;

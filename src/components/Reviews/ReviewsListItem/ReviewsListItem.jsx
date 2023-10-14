import { Author, Item, Text } from './ReviewsListItem.styled';

const ReviewsListItem = ({ author, content }) => {
  return (
    <Item>
      <Author>Author: {author}</Author>
      <Text>{content}</Text>
    </Item>
  );
};

export default ReviewsListItem;

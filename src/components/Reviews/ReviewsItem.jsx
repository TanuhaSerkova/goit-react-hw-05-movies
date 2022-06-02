import { ReviewText, ReviewTitle, ReviewItem } from './ReviewsStyled';
import PropTypes from 'prop-types';

export const ReviewsItem = ({ author, content }) => {
    return (
        <ReviewItem>
        <ReviewTitle>{author}</ReviewTitle>
        <ReviewText>{content}</ReviewText>
        </ReviewItem>
    );
};

ReviewsItem.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
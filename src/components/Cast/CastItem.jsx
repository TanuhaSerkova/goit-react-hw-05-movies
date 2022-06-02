import { HiOutlineEmojiHappy } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { CastStyledItem, CastText, ActorsPhoto } from './CastStyled';

export const CastItem = ({ photo, name, character }) => {
    return (
        <CastStyledItem>
        {photo ? (
            <ActorsPhoto
            src={`https://image.tmdb.org/t/p/original${photo}`}
            alt={name}
            width="128"
            />
        ) : (
            <HiOutlineEmojiHappy size="128px" />
        )}
        <CastText>{name}</CastText>
        <CastText>{character}</CastText>
        </CastStyledItem>
    );
};

CastItem.propTypes = {
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
};
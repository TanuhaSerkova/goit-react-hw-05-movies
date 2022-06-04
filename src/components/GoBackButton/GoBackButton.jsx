import React from 'react';
import PropTypes from 'prop-types';
import { CustomButton } from './GoBackButtonStyled';

const GoBackButton = ({onClick}) => {
    return (
        <CustomButton type="click" onClick={onClick}>
        Go back
        </CustomButton>
    );
};

GoBackButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default GoBackButton;

import React from 'react';
import { CustomButton } from './GoBackButtonStyled';

const GoBackButton = ({onClick}) => {
    return (
        <CustomButton type="click" onClick={onClick}>
        Go back
        </CustomButton>
    );
};

export default GoBackButton;

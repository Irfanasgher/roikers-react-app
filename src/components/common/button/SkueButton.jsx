import React from 'react';
import './SkueButton.scss';

const SkueButton = (props) => {
    const {
        text,
        className,
        onClick,
        small,
        medium
    } = props;

    return (
        <button
            onClick={onClick}
            className={` skew-button ${className}
             ${small ? 'small-skew-button' : ''}
             ${medium ? 'medium-skew-button' : ''}`
            }
            type='submit'
        >
            {text}
        </button>
    );
};

export default SkueButton;

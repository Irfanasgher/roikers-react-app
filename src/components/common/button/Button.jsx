import React from 'react';
import './Button.scss';

const Button = (props) => {
	const {
		text,
		size,
		pading,
		isFilled,
		className,
		fullWidth,
		onClick,
		mediumWidth,
		children,
		withOutBackground,
		withOutBackground1,
		height1
	} = props;

	return (
		<button
			onClick={onClick}
			className={` button ${className} 
                ${isFilled ? 'button2' : ''}
                ${fullWidth ? 'full-width' : ''} 
                ${mediumWidth ? 'medium-width' : ''}
                ${withOutBackground ? 'medium-width-not-bg' : ''}
                ${withOutBackground1 ? 'medium-width-not-bg1' : ''}
                p-2`}
			type='submit'
			style={{ fontSize: `${size}`, height: `${height1}`, padding: `${pading}` }}>
			{text}
			{children}
		</button>
	);
};

export default Button;

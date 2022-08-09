import React, { Component } from 'react';
import './Header.scss';
const Header = (props) => {
	const {
		text,
		textdata,
		textpara,
		changeImage,
		changeImage1,
		changeImage2,
		changeImage3,
		changeImage4,
		changeImage5,
		changePosition,

	} = props;
	return (
		<div id='information'>
			<div
				className={` information 
				${changePosition ? 'change-position-of-text' : ''}
                ${changeImage ? 'change-image' : ''}
                ${changeImage1 ? 'change-image1' : ''} 
                ${changeImage2 ? 'change-image2' : ''}      
                ${changeImage3 ? 'change-image3' : ''}  
                ${changeImage4 ? 'change-image4' : ''} 
                ${changeImage5 ? 'change-image5' : ''}         
                `}>
				<h1>{text} <br /> {textdata} <br /> {textpara}</h1>
			</div>
		</div>
	);
};

export default Header;

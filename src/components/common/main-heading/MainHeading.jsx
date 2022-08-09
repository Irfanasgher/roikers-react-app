import React, { Component } from 'react';
import './MainHeading.scss';
const MainHeading = (props) => {
	const { span, heading, className } = props;
	return (
		<div id='main-heading'>
			<h1 className={`m-5 ${className}`}>
				<span>{span}</span> {heading}
			</h1>
		</div>
	);
};

export default MainHeading;

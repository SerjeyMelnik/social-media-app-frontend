import React, { Children } from 'react';

const CustomButton = ({className = "", onClickFunc = () => {console.log('func not declared')} , children, type = 'button' }) => {
	return ( 
		<button className={`button ${className}`}
				onClick={onClickFunc}
				type={type}
				>
		{children}
		</button>
	 );
}
 
export default CustomButton;
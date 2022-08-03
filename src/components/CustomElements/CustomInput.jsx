import React from 'react';
import { useState } from 'react';

const CustomInput = 

({placeholder = "Default placeholder" , value = '' ,className = '', setValue = Function, error = ''}) => {
	
	return ( 
		<div className={`custom_input ${className}`}>
			<input type="text" 
					className='custom_input-field'
					placeholder={placeholder}
					value={value}
					onChange={ (e)=> setValue(e.target.value) }/>
			{
				error ? 
				<span className="custom_input-error">{error}</span>
				:
				null
			}
		</div>
	 );
}
 
export default CustomInput;
import React from 'react';
import Post from '../components/Post/Post';

const HomePage = () => {
	return (
		<main className='home-page'>
				<div className="posts_container">
					<Post/>
					<Post/>
				</div>
		</main> 
		
	 );
}
 
export default HomePage;
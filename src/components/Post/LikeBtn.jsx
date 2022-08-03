import React, { useState } from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const LikeBtn = () => {
	const [isLiked,setIsLiked] = useState(false);
	const toggleLike = () => {
		setIsLiked((state)=> !state)
	}
	return ( 
		<div className="like_btn-wrapper ">
			<button className='like_btn post_button' onClick={toggleLike}> 
					{	
						isLiked 
						?
						<FavoriteBorderRoundedIcon className='like_btn-svg post_button-svg'/>
						:
						<FavoriteRoundedIcon className='like_btn-svg post_button-svg' />
					}
			</button>
		</div>
	 );
}
 
export default LikeBtn;
import React from 'react';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';

const CommentsBtn = () => {
	return ( 
		<div className="comments_btn-wrapper">
			<button className="comments_btn post_button">
				<ChatRoundedIcon className='comments_btn-svg post_button-svg'/>
			</button>
		</div>
	 );
}
 
export default CommentsBtn;
import React from 'react';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';

const CommentsBtn = ({setShowPostComments}) => {
	const toggleComments = () => {
		setShowPostComments( state => !state )
	}
	return ( 
		<div className="comments_btn-wrapper"> 
			<button className="comments_btn post_button" title='comments' onClick={toggleComments}>
				<ChatRoundedIcon className='comments_btn-svg post_button-svg'/>
			</button>
			<span className='number comments-number'>2</span>
		</div>
	 );
}
 
export default CommentsBtn;
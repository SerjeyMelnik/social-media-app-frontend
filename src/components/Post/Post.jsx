import React, { useState } from 'react';
import LikeBtn from './LikeBtn';
import CommentsBtn from './CommentsBtn';
import { comments_test } from '../../utils/testData';
import Comments from './Comments';
import {Transition} from 'react-transition-group'
const Post = () => {
	const [showPostComments,setShowPostComments] = useState(false);
	const comments = [...comments_test];
	return ( 
			<div className="post">
				<div className="post_user-info">
					<div className="post_user-avatar">
						<img src="https://john-mohamed.com/wp-content/uploads/2018/05/Profile_avatar_placeholder_large.png" width='50px' className='post_user-avatar-img'/>
					</div>
					<div className="post_user-detail">
						<h2 className="post_user-name">Some name</h2>
						<p className='post_user-posted-date'>posted 1 hour ago</p>
					</div>
				</div>
				<div className="post_content">
					<p className="post_content-description">
						Your course has been updated, you can check 
						the new course in your study course.
					</p>
					<div className="post_content-picture">
						<img src="https://static.toiimg.com/photo/msid-75503669,width-96,height-65.cms" className='post_content-picture-img'/>
					</div>
				</div>
				<div className="post_info">
					<LikeBtn/>
					<CommentsBtn setShowPostComments={setShowPostComments}/>
				</div>
				{
					showPostComments ?
					<Comments comments={comments} isShow={showPostComments} className={showPostComments ? 'show' : 'hide'}/>
					:
					null
				}
					


			</div>
	 );
}
 
export default Post;
import React, { useRef } from 'react';
import LeaveTheCommentForm from './LeaveTheCommentForm';

const Comments = ({comments,isShow,className}) => {
	 const comments_wrapper = useRef(null);
	// console.log(comments_wrapper.current.offsetHeight);
	// const heightEl = comments_wrapper.current.offsetHeight;
	// const style = isShow ? {height:heightEl} : null;
	return (
		
		<div className={`comments_wrapper ${className}`} 
			 ref={comments_wrapper}
			>
			<div className="comments">
				{
					comments.length ?
					comments.map(comment => 
						<div className="comment" key={comment._id}>
							<div className="author_avatar" >
								<img src={comment.author.avatar}  className='author_avatar-img'/>
							</div>
							<div className="comment_content">
								<div className="author_info">
									<h2 className='author_name'>{comment.author.name}</h2>
									<span className='comment_posted-date'>{comment.postedDate}</span>
								</div>
								<p className='comment_body'>{comment.comment}</p>
							</div>
						</div>
						) :
					<span>no comments</span>
				}
			</div>
			<LeaveTheCommentForm />
		</div>

		
		
	 );
}
 
export default Comments;
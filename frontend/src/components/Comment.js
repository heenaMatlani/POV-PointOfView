import React from 'react'
import './Comment.css'
function Comment(props) {
  return (
    <div className="comments">
        <div className="comment_icon"><i class="bi bi-person-circle video__icon"></i></div>
        <div className="comment__info">
            <div className="comment__username">{props.username}</div>
            <div className="comment__comment">{props.commentVal}</div>
        </div>
    </div>
  )
}

export default Comment

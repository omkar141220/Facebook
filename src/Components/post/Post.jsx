import { MoreVert } from '@mui/icons-material'
import './post.css'
import { useState } from 'react'
import { Users } from '../../../dummyData'

const Post = ({post}) => {
    const [like,setLike]=useState(post.Like)
    const [isLiked, setisLike]=useState(false)
const likeHandler = ()=>{
    setLike(isLiked? like-1: like+1)
    setisLike(!isLiked)
}
    
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                <img src= {Users.filter((u)=>u.id === post?.userId)[0]. profilePicture} alt=""className='postProfileImg'/>
                <span className="postUsername">
                        {Users.filter((u)=>u.id === post?.userId)[0]. username}
                    </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className='postImg'/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                <img className='likeIcon' src="src\assets\Person\like.png" onClick={likeHandler} alt="" />
                    <img className='likeIcon' src="src\assets\Person\heart (1).png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
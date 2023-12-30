/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom"


const SinglePostCard = ({post}) => {
    const {id, title, createdAt, likes, isSaved ,image,tags} = post
  return (
  <>
   <div className="lws-card">
        <NavLink to={`blogs/${id}`}>
          <img src={image} className="lws-card-image" alt="" />
        </NavLink>
        <div className="p-4">
          <div className="lws-card-header">
            <p className="lws-publishedDate">{createdAt}</p>
            <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
          </div>
          <NavLink to={`blogs/${id}`} className="lws-postTitle"> {title}</NavLink>
          <div className="lws-tags">{
            
                tags?.map(tag => <span className="lws-badge" key={tag}>{tag}</span>)
            
          }</div>
          {/* <!-- Show this element if post is saved --> */}
         {
         isSaved? <div className="flex gap-2 mt-4">
            <span className="lws-badge"> Saved </span>
          </div>:null
         }
          {/* <!-- Show this element if post is saved Ends --> */}
        </div>
      </div>
  
  </>
  )
}

export default SinglePostCard
/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { relatedBlogThunk } from "../redux/Fetures/RelatedBlogs/relatedBlogsSlice"
import { NavLink } from "react-router-dom"


const RelatedBlog = ({tags ,id}) => {
   const relatedBlogs =useSelector(state => state.relatedBlogs?.related)
  console.log(relatedBlogs)
   const dispacth =useDispatch()
    useEffect(() => {
        dispacth(relatedBlogThunk({tags:tags ,id:id}))
    }, [dispacth, id, tags])
  return (
    <aside>
    <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
    <div className="space-y-4 related-post-container">
      {/* <!-- related post  --> */}
      {
        relatedBlogs?.map((item ,index) => (
          <div key={index} className="card">
        <NavLink to={`/blogs/${item?.id}`}>
          <img src={item?.image} className="card-image" alt="" />
        </NavLink>
        <div className="p-4">
          <NavLink to={`/blogs/${item?.id}`} className="text-lg post-title lws-RelatedPostTitle">
            {item?.title}
          </NavLink>
          <div className="mb-0 tags">
         {
          item?.tags.map((tag ,index) => (
            <span key={index}>
              #{tag} 
            </span>
          ))
         }
          </div>
          <p>{item?.date}</p>
        </div>
      </div>
        ))
      }

      {/* <!-- relate/d post ends --> */}
      
    </div>
  </aside>
  )
}

export default RelatedBlog
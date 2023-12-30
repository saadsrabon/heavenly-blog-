import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { NavLink, useLocation } from "react-router-dom";
import { fetchBlogthunk, saveBlog } from "../redux/Fetures/SingleBlog/singleBlogSlice";

import logo from '../assets/images/LWSBlog.svg'

 const Post = () => {
  let location = useLocation();
  const blog = useSelector(state => state?.blog?.blog) || {}
 const {title,likes,image,tags,description ,isSaved,id} = blog
 console.log(id)
  const dispatch =useDispatch()
   useEffect(() => {
    dispatch(fetchBlogthunk(location?.pathname.split('/')[2]))
   }, [dispatch,location?.pathname])
const handleSave =()=>{
  dispatch(saveBlog(id))
}
  return (
   <>
    {/* <!-- navbar start  --> */}
  <nav className="py-4 border-b">
    <div className="navbar-container">
      {/* <!-- logo --> */}
      <div className="logo">
        <img src={logo} alt="search" />
      </div>

      {/* <!-- auth buttons , This will nonfunctional, just for nice looking --> */}
      <div className="auth-buttons">
        <button className="btn btn-primary">sign in</button>
        <button className="btn btn-outline">sign up</button>
      </div>
    </div>
  </nav>
  {/* <!-- navbar end  --> */}
  {/* <!-- Go Home / Go Back --> */}
  <div className="container mt-8">
    <NavLink to='/' className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
        className="mr-2 fa-solid fa-house"></i>Go Home </NavLink>
  </div>
  <section className="post-page-container">
    {/* <!-- detailed post  --> */}
    <main className="post">
      <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
       {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {
            tags?.map(tag => <span className="" key={tag}>#{tag}</span>)
          }
        </div>
        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
          {
          isSaved?<button  className="active save-btn" id="lws-singleSavedBtn">
            <i className="fa-regular fa-bookmark"></i> Saved
          </button>:<button onClick={handleSave} className="save-btn" id="lws-singleSavedBtn">
            <i className="fa-regular fa-bookmark"></i> Save
          </button>
          }
        </div>
        <div className="mt-6">
          <p>
           {description}
           
          </p>
        </div>
      </div>
    </main>
    {/* <!-- detaile/d post ends --> */}
    {/* <!-- related posts --> */}
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        {/* <!-- related post  --> */}
        <div className="card">
          <a href="post.html">
            <img src="./images/git.webp" className="card-image" alt="" />
          </a>
          <div className="p-4">
            <a href="post.html" className="text-lg post-title lws-RelatedPostTitle">
              Top Github Alternatives
            </a>
            <div className="mb-0 tags">
              <span>#python,</span> <span>#tech,</span> <span>#git</span>
            </div>
            <p>2010-03-27</p>
          </div>
        </div>
        {/* <!-- relate/d post ends --> */}
        {/* <!-- related post  --> */}
        <div className="card">
          <a href="post.html">
            <img src="./images/ai.jpg" className="card-image" alt="" />
          </a>
          <div className="p-4">
            <a href="post.html" className="text-lg post-title lws-RelatedPostTitle">
              The future of Artificial Inteligence
            </a>
            <div className="mb-0 tags">
              <span>#python,</span> <span>#tech,</span> <span>#git</span>
            </div>
            <p>2020-07-15</p>
          </div>
        </div>
        {/* <!-- related post ends --> */}
      </div>
    </aside>
    {/* <!-- related posts ends --> */}
  </section>
   </>
  )
}
export default Post
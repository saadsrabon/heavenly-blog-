

import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import logo from './assets/images/LWSBlog.svg'
import SinglePostCard from './components/blogCard'
import { useEffect } from 'react'
import { fetchBlogsthunk } from './redux/Fetures/Blogs/blogSlice'
function App() {
 const posts = useSelector(state => state?.blogs?.blogs) || []
 const dispacth =useDispatch()
 useEffect(() => {
    dispacth(fetchBlogsthunk())
 }, [dispacth])
  return (
    <>
     
  <nav className="py-4 border-b">
    <div className="navbar-container">
      {/* <!-- logo --> */}
      <div className="logo">
        <a href="index.html">
          <img src={logo} alt="search" />
        </a>
      </div>
      {/* <!-- auth buttons , This will nonfunctional, just for nice looking --> */}
      <div className="auth-buttons">
        <button className="btn btn-primary">sign in</button>
        <button className="btn btn-outline">sign up</button>
      </div>
    </div>
  </nav>
  {/* <!-- navbar end  --> */}

  {/* <!-- main --> */}
  <section className="wrapper">
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input type="radio" name="filter" id="lws-all" checked className="radio" />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input type="radio" name="filter" id="lws-saved" className="radio" />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
    {/* <!-- posts container  --> */}
    <main className="post-container" id="lws-postContainer">
      {/* <!-- single post --> */}
     {
        posts.map(post => <SinglePostCard key ={post?.id} post={post} />)
     }
      {/* <!-- Single Post Ends --> */}

  

    </main>
    {/* <!-- posts container ends --> */}
  </section>
    </>
  )
}

export default App



import './App.css'
import logo from './assets/images/LWSBlog.svg'
function App() {
 

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
      <div className="lws-card">
        <a href="post.html">
          <img src="./assets/images/git.webp" className="lws-card-image" alt="" />
        </a>
        <div className="p-4">
          <div className="lws-card-header">
            <p className="lws-publishedDate">2023-05-01</p>
            <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>100</p>
          </div>
          <a href="post.html" className="lws-postTitle"> Top Github Alternatives </a>
          <div className="lws-tags"><span>#python,</span> <span>#tech,</span> <span>#git</span></div>
          {/* <!-- Show this element if post is saved --> */}
          <div className="flex gap-2 mt-4">
            <span className="lws-badge"> Saved </span>
          </div>
          {/* <!-- Show this element if post is saved Ends --> */}
        </div>
      </div>
      {/* <!-- Single Post Ends --> */}

      {/* <!-- single post --> */}
      <div className="lws-card">
        <a href="post.html">
          <img src="./assets/images/git.webp" className="lws-card-image" alt="Top Github Alternatives" />
        </a>
        <div className="p-4">
          <div className="lws-card-header">
            <p className="lws-publishedDate">2023-05-01</p>
            <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>100</p>
          </div>
          <a href="post.html" className="lws-postTitle"> Top Github Alternatives </a>
          <div className="lws-tags"><span>#python,</span> <span>#tech,</span> <span>#git</span></div>
          {/* <!-- Show this element if post is saved --> */}
          <div className="flex gap-2 mt-4">
            <span className="lws-badge"> Saved </span>
          </div>
          {/* <!-- Show this element if post is saved Ends --> */}
        </div>
      </div>
      {/* <!-- Single Post Ends --> */}

    </main>
    {/* <!-- posts container ends --> */}
  </section>
    </>
  )
}

export default App

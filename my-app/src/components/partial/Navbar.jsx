export function Nav(){
    return(
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="index.html">
            {/* <img src="./static/images/logo.png" alt="" /> */}
            <h1>GL</h1>
          </a>
          <div className="" id="">
            <div className="User_option">
              <form className="form-inline my-2  mb-3 mb-lg-0">
                <input type="search" placeholder="Search" />
                <button
                  className="btn   my-sm-0 nav_search-btn"
                  type="submit"
                />
              </form>
            </div>
            <div className="custom_menu-btn">
              <button onClick={openNav}>
                <span className="s-1"></span>
                <span className="s-2"></span>
                <span className="s-3"></span>
              </button>
            </div>
            <div id="myNav" className="overlay">
              <div className="overlay-content">
              <a href="index.html">Home</a>
                <a href="/categories">Categories</a>
                <a href="/add">Create Book</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/logout">Logout</a>
              </div>
            </div>
          </div>
        </nav>
    )
}
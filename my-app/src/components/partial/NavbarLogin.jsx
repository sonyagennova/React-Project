import { Fragment } from "react";
import { Link } from "react-router-dom";

export function NavLogin(){
    return(
        <>
            <body class="sub_page">
  <div class="hero_area ">

<header className="header_section">
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg custom_nav-container">
      <Link className="navbar-brand" to="/">
        <h1>GL</h1>
      </Link>
      <div className="" id="">
        <div className="User_option">
          <form className="form-inline my-2  mb-3 mb-lg-0">
            <input type="search" placeholder="Search" />
            <button className="btn   my-sm-0 nav_search-btn" type="submit" />
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
            
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/add">Create Book</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/logout">Logout</Link>
            
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>
</div>
</body>
        </>
    )
}
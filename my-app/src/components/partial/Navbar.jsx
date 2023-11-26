import { Link } from "react-router-dom";
import { logout } from "../../utils/logout";
import * as userService from "../../utils/userService"

export function Nav({isRegistered}){
    return(
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to="/">
            {/* <img src="./static/images/logo.png" alt="" /> */}
            <h1>GL</h1>
          </Link>
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
              <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
                {localStorage.getItem("accessToken")?
                  <><Link to="/add">Create Book</Link>
                  <Link onClick={logout}>Logout</Link></>:
                  <><Link to="/login">Login</Link>
                  <Link to="/register">Register</Link></>
                }
              </div>
            </div>
          </div>
        </nav>
    )
}
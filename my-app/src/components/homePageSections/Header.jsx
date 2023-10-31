export function Header(){
    return(
        <div className="hero_area ">
    {/* header section strats */}
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="index.html">
            {/* <img src="./drool-html/images/logo.png" alt="" /> */}
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
                <a href="logout">Logout</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* end header section */}
    {/* slider section */}
    <section className="slider_section">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          <li data-target="#carouselExampleIndicators" data-slide-to={3} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="detail-box">
                    <div className="number">
                      <h5>01</h5>
                    </div>
                    <h1>
                      <span>Giga Library</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Read More
                      </a>
                      <a href="" className="btn-2">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="./drool-html/images/books-4.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="detail-box">
                    <div className="number">
                      <h5>02</h5>
                    </div>
                    <h1>
                      <span>Giga Library</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Read More
                      </a>
                      <a href="" className="btn-2">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="./drool-html/images/books-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="detail-box">
                    <div className="number">
                      <h5>03</h5>
                    </div>
                    <h1>
                      <span>Giga Library</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Read More
                      </a>
                      <a href="" className="btn-2">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="./drool-html/images/books-2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="detail-box">
                    <div className="number">
                      <h5>04</h5>
                    </div>
                    <h1>
                      <span>Giga Library</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Read More
                      </a>
                      <a href="" className="btn-2">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="./drool-html/images/books-3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end slider section */}
        </div>
    )
}
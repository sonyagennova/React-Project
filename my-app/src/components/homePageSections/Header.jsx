import { Link } from "react-router-dom";
import { logout } from "../../utils/logout";
import * as userService from "../../utils/userService"
import { Nav } from "../partial/Navbar";
import './Header.scss'

export function Header(){

    return(
        <div className="hero_area ">
    {/* header section strats */}
    <header className="header_section">
      <div className="container-fluid">
       <Nav/>
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
                      <Link to="/categories" className="btn-1">
                        Categories
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="./static/images/books-4.png" alt="" />
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
                    <Link to="/categories" className="btn-1">
                        Categories
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="./static/images/books-1.png" alt="" />
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
                    <Link to="/categories" className="btn-1">
                        Categories
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="./static/images/books-2.png" alt="" />
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
                    <Link to="/categories" className="btn-1">
                        Categories
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="./static/images/books-3.png" alt="" />
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
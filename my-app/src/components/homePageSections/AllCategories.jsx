import { Link } from "react-router-dom";
import './AllCategories.scss'

export function AllCategories(){
    return(
        <section className="pet_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="./static/images/books-5.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <img src="./static/images/storytelling.png" alt="" />
                  <h2>Book categories</h2>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters,
                </p>
                <div className="btn-box">
                  <Link to="/categories">
                    <span>See all</span>
                    <img src="./static/images/link-arrow-1.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
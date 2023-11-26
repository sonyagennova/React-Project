import { Link } from "react-router-dom";

export function FamousBooks(props){
    return(
        <section className="food_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <img src="./static/images/storytelling (1).png" alt="" />
        <h2>Top 3 Books</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a
        </p>
      </div>
      <div className="food_container">
        <div className="box">
          <div className="img-box">
            <img src="./static/images/africa.png" alt="" />
          </div>
          <div className="detail-box">
            <h3>
              <p>{props.books[0].name}</p>
              <p>{props.books[0].year}</p>
            </h3>
            <Link href="">Read Now</Link>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="./static/images/theBee.png" alt="" />
          </div>
          <div className="detail-box">
            <h3>
              <p>{props.books[1].name}</p>
              <p>{props.books[1].year}</p>
            </h3>
            <Link href="">Read Now</Link>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="./static/images/ecologyBook.png" alt="" />
          </div>
          <div className="detail-box">
            <h3>
              <p>{props.books[2].name}</p>
              <p>{props.books[2].year}</p>
            </h3>
            <Link href="">Read Now</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
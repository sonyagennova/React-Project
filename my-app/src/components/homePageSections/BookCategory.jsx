import { Link } from "react-router-dom";

export function BookCategory(){
    return(
        <section className="animal_section layout_padding">
    <div className="container">
      <div className="animal_container">
        <div className="box b1">
          <div className="img-box">
            <Link to="/category/kids"><img src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></Link>
          </div>
          <div className="detail-box">
            <h5>Kids</h5>
            <p>
              It is a long established fact that a reader will be distracted by
            </p>
          </div>
        </div>
        <div className="box b2">
          <div className="img-box">
            <Link to="/category/tragedy"><img src="https://images.unsplash.com/photo-1532598065077-cf9ee59bf91f?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></Link>
          </div>
          <div className="detail-box">
            <h5>Tragedy</h5>
            <p>
              It is a long established fact that a reader will be distracted by
            </p>
          </div>
        </div>
        <div className="box b1">
          <div className="img-box">
            <Link to="/category/history"><img src="https://images.unsplash.com/photo-1585159858792-ceb6be5c1937?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></Link>
          </div>
          <div className="detail-box">
            <h5>History</h5>
            <p>
              It is a long established fact that a reader will be distracted by
            </p>
          </div>
        </div>
        <div className="box b2">
          <div className="img-box">
            <Link to="/category/fantasy"><img src="https://images.unsplash.com/photo-1573689705959-7786e029b31e?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></Link>
          </div>
          <div className="detail-box">
            <h5>Fantasy</h5>
            <p>
              It is a long established fact that a reader will be distracted by
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
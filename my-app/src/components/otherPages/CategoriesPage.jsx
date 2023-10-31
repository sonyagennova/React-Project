import { Footer } from "../homePageSections/Footer";
import { Info } from "../homePageSections/InfoSection";
import { Nav } from "../partial/Navbar";

export function CategoriesPage(){
    return(
        <>
        <section className="animal_section1">
        <div className="container-fluid">
            <Nav />
        </div>
        <h1>All book categories</h1>
        <p className="p">Choose one to start exploring the world of books!</p>
        <div className="container">
          <div className="animal_container">
            
            <div className="box b1">
              <div className="img-box">
                <a href="/kids"><img src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
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
                <a href="/nature"><img src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&q=80&w=2931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
              </div>
              <div className="detail-box">
                <h5>Nature</h5>
                <p>
                  It is a long established fact that a reader will be distracted by
                </p>
              </div>
            </div>
            <div className="box b1">
              <div className="img-box">
                <a href="/history"><img src="https://images.unsplash.com/photo-1585159858792-ceb6be5c1937?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
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
                <a href="/fantasy"><img src="https://images.unsplash.com/photo-1573689705959-7786e029b31e?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
              </div>
              <div className="detail-box">
                <h5>Fantasy</h5>
                <p>
                  It is a long established fact that a reader will be distracted by
                </p>
              </div>
            </div>
            <div className="box b2">
              <div className="img-box">
                <a href="/romance"><img src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&q=80&w=2973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
              </div>
              <div className="detail-box">
                <h5>Romance</h5>
                <p>
                  It is a long established fact that a reader will be distracted by
                </p>
              </div>
            </div>
            <div className="box b2">
              <div className="img-box">
                <a href="/adventure"><img src="https://images.unsplash.com/photo-1571782605941-8c8fd0d43df6?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
              </div>
              <div className="detail-box">
                <h5>Adventure</h5>
                <p>
                  It is a long established fact that a reader will be distracted by
                </p>
              </div>
            </div>
            <div className="box b2">
              <div className="img-box">
                <a href="/mystery"><img src="./drool-html/images/mystery.jpg" alt="" /></a>
              </div>
              <div className="detail-box">
                <h5>Mystery</h5>
                <p>
                  It is a long established fact that a reader will be distracted by
                </p>
              </div>
            </div>
            <div className="box b2">
              <div className="img-box">
                <a  href="/autobiography"><img src="https://images.unsplash.com/photo-1619878473858-ace2b236897c?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
              </div>
              <div className="detail-box">
                <h5>Autobiography</h5>
                <p>
                  It is a long established fact that a reader will be distracted by
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Info />
        <Footer />
      </>
    )
}
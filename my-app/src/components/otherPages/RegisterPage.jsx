import { Footer } from "../homePageSections/Footer";
import { Info } from "../homePageSections/InfoSection";
import { NavLogin } from "../partial/NavbarLogin";

export function RegisterPage(){
    return(
        <>
            <NavLogin />
            <section className="contact_section layout_padding-top">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-5 offset-md-1">
        <div className="form_container">
          <div className="heading_container">
            <img src="./static/images/storytelling.png" alt="" />
            <h2>Register</h2>
          </div>
          <form method="POST">
            <div>
              <input type="text" placeholder="Full Name " />
            </div>
            <div>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <input type="password" placeholder="Repeat password" />
            </div>
            <div className="d-flex ">
              <button>Register</button>
            </div>
          </form>
        </div>
      </div>
      <div classname="col-md-6 px-0">
  <div classname="map_container">
    <div classname="map-responsive">
      <img src="./static/images/books-6.png" width={500}/>
    </div>
  </div>
</div>

    </div>
  </div>
</section>
<br />
<Info />
<Footer />
        </>
    )
}
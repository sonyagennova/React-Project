import { Footer } from "../homePageSections/Footer";
import { Info } from "../homePageSections/InfoSection";
import { NavLogin } from "../partial/NavbarLogin";

export function Login(){
    return(
        <>
        <NavLogin />
        <section className="contact_section layout_padding-top">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-5 offset-md-1">
        <div className="form_container">
          <div className="heading_container">
            <img src="./drool-html/images/storytelling.png" alt="" />
            <h2>Login</h2>
          </div>
          <form method="POST">
            <div>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div className="d-flex ">
              <button>LOGIN</button>
            </div>
          </form>
        </div>
      </div>
      <div classname="col-md-6 px-0">
  <div classname="map_container">
    <div classname="map-responsive">
      <img src="./drool-html/images/books-5.png" width={500}/>
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
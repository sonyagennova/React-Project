import { Footer } from "../homePageSections/Footer";
import { Info } from "../homePageSections/InfoSection";
import { NavLogin } from "../partial/NavbarLogin";

export function CreatePage(){
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
            <h2>Create a Book</h2>
          </div>
          <form method="POST">
            <div>
              <input type="text" placeholder="Title" />
            </div>
            <div>
              <input type="text" placeholder="Author" />
            </div>
            <div>
              <input type="text" placeholder="Year published" />
            </div>
            <div>
              <input type="text" placeholder="Description" />
            </div>
            <div>
              <input type="text" placeholder="Cover Image URL" />
            </div>
            <div className="d-flex ">
              <button>CREATE</button>
            </div>
          </form>
        </div>
      </div>
      <div classname="col-md-6 px-0">
  <div classname="map_container">
    <div classname="map-responsive">
      <img src="./drool-html/images/books-7.png" width={500}/>
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
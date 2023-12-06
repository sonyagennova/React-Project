import { Footer } from "../homePageSections/Footer";
import { Info } from "../homePageSections/InfoSection";
import { NavLogin } from "../partial/NavbarLogin";
import * as bookService from "../../utils/booksService"
import { useNavigate } from "react-router-dom";
import './createPage.scss'
//import * as bookCreateHandler from "../otherPages/CategoryPage";

export function CreatePage(){
  const navigate = useNavigate();
  const bookCreateHandler = async (e) => {
    // Stop page from refreshing
    e.preventDefault();


    // Get data from form data
    const data = Object.fromEntries(new FormData(e.target.form));
    const accessToken = localStorage.getItem("accessToken")

    // Create new user at the server
    await bookService.create(data, accessToken);
    navigate("/categories")
  };
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
            <h2>Create a Book</h2>
          </div>
          <form method="POST">
            <div>
              <input type="text" name="title" placeholder="Title" />
            </div>
            <div>
              <input type="text" name="author" placeholder="Author" />
            </div>
            <div>
              <input type="text" name="publication_year" placeholder="Year published" />
            </div>
            <div>
              <input type="text" name="description" placeholder="Description" />
            </div>
            <div>
              <input type="text" name="imageUrl" placeholder="Cover Image URL" />
            </div>
            <div>
              <select name="category">
                <option value="kids">Kids</option>
                <option value="history">History</option>
                <option value="fantasy">Fantasy</option>
                <option value="mystery">Mystery</option>
                <option value="tragedy">Tragedy</option>
                <option value="adventure">Adventure</option>
                <option value="autobiography">Autobiography</option>
                <option value="classic">Classic</option>
              </select>
            </div>
            <div className="d-flex ">
              <button type="submit" onClick={bookCreateHandler}>CREATE</button>
            </div>
          </form>
        </div>
      </div>
      <div classname="col-md-6 px-0">
  <div classname="map_container">
    <div classname="map-responsive">
      <img src="./static/images/books-8.png" width={500}/>
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
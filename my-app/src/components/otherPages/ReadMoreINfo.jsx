import { useEffect, useState } from "react";
import * as bookService from "../../utils/booksService"
import { Footer } from "../homePageSections/Footer";
import { Info } from "../homePageSections/InfoSection";
import { NavLogin } from "../partial/NavbarLogin";

export function ReadMore({bookId}){
    const [book, setBook] = useState([])

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => setBook(result))
    }, [bookId])

    console.log(bookId)

    return (
        <>
        <NavLogin />
        <section className="contact_section layout_padding-top">
<div className="container-fluid">
<div className="row">
  <div className="col-md-5 offset-md-1">
    <div className="form_container">
      <div className="heading_container">
        <img src="./static/images/storytelling.png" alt="" />
        <h2>{book.title}</h2>
      </div>
        <div>
          <h2>Author: {book.author}</h2>
        </div>
        <div>
        <h2>Year published: {book.publication_year}</h2>
        </div>
        <div>
        <h3>Description:</h3> <p>{book.description}</p>
        </div>
        <div>
          <h2>Category: {book.category}</h2>
        </div>
    </div>
  </div>
  <div className="col-md-6 px-0">
<div className="map_container">
<div className="map-responsive">
  <img src={book.imageUrl} width={500}/>
</div>
</div>
</div>

</div>
</div>
</section>
<br />
    </>
      );
}
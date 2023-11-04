import { useEffect, useState } from "react";
import * as booksService from "../../utils/booksService";
import { Footer } from "../homePageSections/Footer";
import { Info } from "../homePageSections/InfoSection";
import { BooksItem } from "../partial/BooksItem";
import { Nav } from "../partial/Navbar";
let short_description = "";

export function CategoryPage(props){
    const [books, setBooks] = useState([]);
    useEffect(() => {
        booksService.getAll()
            .then(result => setBooks(result))
            .catch(err => console.log(err))
    }, [])
    let ifBook = false;
    let categoryBook;

        books.forEach(book => {
            if(location.pathname.includes(book.category.toString().toLowerCase())){
                ifBook = true;
                categoryBook = book;
            } 
        });

    return(
        <>
            <section className="animal_section1">
                <div className="container-fluid">
                    <Nav />
                </div>
                {ifBook?
                        <BooksItem
                        key={categoryBook._id}
                        bookId={categoryBook._id}
                        title={categoryBook.title}
                        author={categoryBook.author}
                        publicationYear={categoryBook.publication_year}
                        description={categoryBook.description}
                        imageUrl={categoryBook.imageUrl}
                        category={categoryBook.category}
                    />:
                    <div className="container">
                    <div className="animal_container">
                    
                        <h1>No books found for this category</h1>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <br/>
                        <br/>
                        <br/>
                        <br/><br/><br/>

                    </div>
                </div>
            }
            </section>
            <Info />
            <Footer />
        </>
    )
}
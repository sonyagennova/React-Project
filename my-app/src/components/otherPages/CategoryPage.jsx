import { useEffect, useState } from "react";
import App from "../../App";
import * as booksService from "../../utils/booksService";
import { Footer } from "../homePageSections/Footer";
import { Info } from "../homePageSections/InfoSection";
import { BooksItem } from "../partial/BooksItem";
import { CapitalizeFirstLowercaseRest } from "../partial/FirstLetterCapitel";
import { Nav } from "../partial/Navbar";
import { ReadMore } from "./ReadMoreINfo";

let short_description = "";

export function CategoryPage(){
    const [selectedBook, setSelectedBook] = useState(null);
    const [showInfo, setShowInfo] = useState(false);

    const bookInfoClickHandler = (bookId) => {
        setSelectedBook(bookId);
        setShowInfo(true);
    };

    const bookInfoCloseHandler = () => {
        setShowInfo(false);
    }

    const [books, setBooks] = useState([]);
    useEffect(() => {
        booksService.getAll()
            .then(result => setBooks(result))
            .catch(err => console.log(err))
    }, [])

    let ifBook = false;
    let categoryBook = [];

        books.forEach(book => {
            if(location.pathname.includes(String(book.category).toLowerCase())){
                ifBook = true;
                categoryBook.push(book);
                if(book.description.length > 80){
                    short_description = book.description.substring(0, 80) + "...";
                } else {
                    short_description = description;
                }
            } 
        });

        let categoryBooks = [];
        let category = "";

        categoryBook.forEach(book => {categoryBooks.push(
            <BooksItem
                        key={book._id}
                        bookId={book._id}
                        title={book.title}
                        author={book.author}
                        publicationYear={book.publication_year}
                        description={short_description}
                        imageUrl={book.imageUrl}
                        category={book.category}
                        onInfoClick={bookInfoClickHandler}
                    />
            
        ); category = CapitalizeFirstLowercaseRest(book.category);})

    return(
        <>
            <section className="animal_section1">
            {showInfo &&
                <ReadMore
                    key={selectedBook}
                    bookId={selectedBook}
                    infoClose={bookInfoCloseHandler}
                />}
                <>
                <div className="container-fluid">
                    <Nav />
                </div>
                {ifBook?
                    <>
                        <h1>{category} Category Books</h1> 
                        <div className="container">
                            <div className="animal_container">
                                {categoryBooks}
                            </div>
                        </div>
                    </>:
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
                </>
            </section>
            <Info />
            <Footer />
            
        </>
    )
}
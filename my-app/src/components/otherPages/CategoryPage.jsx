import React, { useEffect, useState } from "react";
import { unstable_useViewTransitionState, useNavigate } from "react-router-dom";
import App from "../../App";
import * as booksService from "../../utils/booksService";
import { Footer } from "../homePageSections/Footer";
import { Info } from "../homePageSections/InfoSection";
import { BooksItem } from "../partial/BooksItem";
import { CapitalizeFirstLowercaseRest } from "../partial/FirstLetterCapitel";
import { Nav } from "../partial/Navbar";
import { ReadMore } from "./ReadMoreINfo";
import './CategoryPage.scss'

export function CategoryPage(){
    const [selectedBook, setSelectedBook] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const [comments, setComments] = useState([]);

    let categoryBooks = [];
    let category = "";

    const navigate = useNavigate();

    const bookInfoClickHandler = (bookId, comments) => {
        setSelectedBook(bookId);
        setShowInfo(true);
        setComments(comments)
    };

    
    const [books, setBooks] = useState([]);
    useEffect(() => {
        booksService.getAll()
        .then(result => {
            setBooks(result)
        })
        .catch(err => console.log(err))
    }, [])
    
    const bookInfoCloseHandler = () => {
        setShowInfo(false);
        booksService.getAll()
        .then(result => setBooks(result))
        .catch(err => console.log(err));
        navigate(`/category/${category.toLowerCase()}`, {state: books})
    }
    let ifBook = false;
    let categoryBook = [];

        books.forEach(book => {
            if(location.pathname.includes(String(book.category).toLowerCase())){
                ifBook = true;
                categoryBook.push(book);
            } 
        });

        categoryBook.forEach(book => {categoryBooks.push(
            <BooksItem
                        key={book._id}
                        bookId={book._id}
                        title={book.title}
                        author={book.author}
                        publicationYear={book.publication_year}
                        imageUrl={book.imageUrl}
                        category={book.category}
                        onInfoClick={bookInfoClickHandler}
                        comments={book.comments}
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
                    show={showInfo}
                    comments={comments}
                    showInfo={showInfo}
                    setShowInfo={setShowInfo}
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
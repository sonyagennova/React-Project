import { useEffect, useState } from "react";
import * as bookService from "../../utils/booksService"
import { Footer } from "../homePageSections/Footer";
import { Info } from "../homePageSections/InfoSection";
import { NavLogin } from "../partial/NavbarLogin";

export function ReadMore({bookId, infoClose}){
    const [book, setBook] = useState([])

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => setBook(result))
    }, [bookId])

    return(
        <>
        <div className="overlayBookInfo">
            <div className="details">
                <div className="detail-container-book-info">
                    <header className="headers">
                        <h2>Book Detail</h2>
                        <button className="btn close">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <div className="content">
                        <div className="image-container-book-info">
                            <img src={book.imageUrl} alt={book.title} className="image" />
                        </div>
                        <div className="user-details">
                            <p>
                                Title:
                                <strong> {book.title}</strong>
                            </p>
                            <p>Author: <strong>{book.author}</strong></p>
                            <p>Description: <strong>{book.description}</strong></p>
                        </div>
                    </div>
                    <button onClick={infoClose}>Close</button>
                </div>
            </div>
        </div>
        </>
      );
}
import { useEffect, useState } from "react";
import * as bookService from "../../utils/booksService"
import { Modal, Button } from "react-bootstrap";

export function ReadMore({bookId, infoClose, show}){
    const [book, setBook] = useState([])

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => setBook(result))
    }, [bookId])

    return(
        <>
        <Modal show={show} onHide={infoClose}>
        <Modal.Header closeButton>
          <Modal.Title>{book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
                <div class="popup__photo">
                    <img src={book.imageUrl} alt={book.title}/>
                </div>
                <div class="popup__text">
                    <h1>{book.title}</h1>
                    <h3>{book.author}</h3>
                    <p>{book.description}</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={infoClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
      );
}
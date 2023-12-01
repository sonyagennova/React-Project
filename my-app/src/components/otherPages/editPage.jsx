import { useState } from "react";
import {InputGroup, Form, Modal, Button, ModalDialog} from "react-bootstrap";
import * as bookService from "../../utils/booksService"
import { CapitalizeFirstLowercaseRest } from "../partial/FirstLetterCapitel";

export function Edit({book, bookId, setShowEdit, show, hideEditButton}){

    //const [showBook, setShowBook] = useState(false)

    const editBook = async(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target.form));
        //console.log(data)
        await bookService.editBook(data, bookId);
        show = false;
        setShowEdit(false)
        hideEditButton(false)
    }

    const onClose = () => {
        setShowEdit(false);
        hideEditButton(false)
    }

    return(
        <>
        <Modal show={show} backdrop="static">
        <Form>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
        <Form.Control
        //   placeholder={book.title}
        defaultValue={book.title}
        name="title"
          aria-label="Title"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
        name="author"
          defaultValue={book.author}
          aria-label="Book's author"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">Author</InputGroup.Text>
      </InputGroup>

      <Form.Label htmlFor="basic-url">Your book cover URL</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control id="basic-url" name="imageUrl" aria-describedby="basic-addon3" defaultValue={book.imageUrl}/>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control id="basic-url" name="publication_year" aria-describedby="basic-addon3" defaultValue={book.publication_year}/>
        <InputGroup.Text id="basic-addon2">Year</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Description</InputGroup.Text>
        <Form.Control as="textarea" name="description" defaultValue={book.description} aria-label="Description" />
      </InputGroup>

      <Modal.Footer>
            <>
              <Button variant="warning" onClick={editBook}>Edit</Button>
              <Button variant="secondary" onClick={onClose}>Close</Button>
            </>
        </Modal.Footer>
        </Form>
        </Modal>
          </>
    )
}
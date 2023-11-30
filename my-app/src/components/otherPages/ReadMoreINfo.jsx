import { useEffect, useState } from "react";
import * as bookService from "../../utils/booksService"
import * as userService from "../../utils/userService"
import { Modal, Button, Form, Stack, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function ReadMore({bookId, infoClose, show, comments, showInfo}){
    const [book, setBook] = useState([])
    const [com, setCom] = useState([])
    const [user, setUser] = useState([])
    const [image, setImage] = useState([])

    let nextId = 0

    let addComment = []
    
    useEffect(() => {
      bookService.getOne(bookId)
      .then(result => setBook(result))
    }, [bookId])

    useEffect(() => {
      userService.getOne()
      .then(result => setUser(result.username))
    }, [])

    useEffect(() => {
      userService.getOne()
      .then(result => setImage(result.userImage))
    }, [])

    console.log(image)

    useEffect(() => {
      bookService.getAllComments()
      .then(result => 
        result.forEach(comment => {
        if(comment.bookId === bookId){
          addComment[nextId] = {comment: comment.comments, username: comment.username, image: comment.userImage};
          setCom(addComment)
          nextId ++;
        }
      })
      )
    }, [])

    
    const comment = async (e) => {
      e.preventDefault()
      console.log(com)
      
      const data = Object.fromEntries(new FormData(e.target.form));
      //setComment(addComment)
      
      await bookService.addComment(bookId, com);
      await bookService.setComments(data, bookId, user, image);
      //console.log(com)
      
      document.getElementById("comment").value = "";
    }
    
    console.log(book)
    return(
        <>
        <Modal show={show} onHide={infoClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                <div >
                    <img style={{marginRight: "50px", width:"400px"}} src={book.imageUrl} alt={book.title}/>
                </div>
                <div>
                    <h1>{book.title}</h1>
                    <h3>{book.author}</h3>
                    <p>{book.description}</p>
            </div>
            </div>
          <Modal.Body>
            <Form style={{marginBottom: "15px"}}>
      <Form.Group className="mb-3" controlId="comment">
        <Form.Label><h3>Reviews</h3></Form.Label>
        <Form.Control type="text" placeholder="Add your comment" name="comment"/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={comment}>
        Submit
      </Button>
    </Form>
    
    
    {
      com.map(comment => {
        return(
          <div className="d-flex flex-row comment-row">
            <div className="p-2"><span className="round"><img src={comment.image} alt="user" width="50"/></span></div>
            <div className="comment-text w-100">
                <h5>{comment.username}</h5>
                <div className="comment-footer">
                   
                </div>
                <p className="m-b-5 m-t-10">{comment.comment}</p>
            </div>
          </div>
        )
    
      })
    }
      

      </Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          {book.ownerId == localStorage.getItem("accessToken")&&
            <>
              <Button variant="warning">Edit</Button>
              <Button variant="danger">Delete</Button>
            </>
          }
          <Button variant="secondary" onClick={infoClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
      );
}
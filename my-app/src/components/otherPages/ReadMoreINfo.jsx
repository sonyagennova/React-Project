import { useEffect, useState } from "react";
import * as bookService from "../../utils/booksService"
import * as userService from "../../utils/userService"
import { Modal, Button, Form, Stack, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Edit } from "./editPage";
import { EditComment } from "./editComment";

export function ReadMore({bookId, infoClose, show, setShowInfo}){

    const [book, setBook] = useState([])
    const [com, setCom] = useState([])
    const [user, setUser] = useState([])
    const [owner, setOwner] = useState([])
    const [image, setImage] = useState([])

    const[addCommentClicked, setAddCommentClicked] = useState([]);

    const category = book.category;

    const[showEdit, setShowEdit] = useState(false);
    const[showEditComment, setShowEditComent] = useState(false);
    const[hideEditButton, setHideEditButton] = useState(false);
    const navigate = useNavigate();

    const showEditPage = () => {
      setShowEdit(true)
      setHideEditButton(true);
    }

    // useEffect(() => {
    //   com.forEach(comment => {
    //     //console.log(comment._id)
    //     if(comment._id === commentId){
    //       //console.log(comment)
          
    //       setCurrentComment(comment.comment)
    //       setCurrentComment((state) => {
    //         return state
    //       })
    //     }
    //   })
    // }, [iscurrentComment])

    // const showEditCommentPage = (e) => {
    //   const data = e.target.parentNode.parentNode.parentNode.parentNode
    //   console.log(data)

    //   setCommentId(data.id)
    //   setCommentId((state) => {
    //     return state
    //   })
    //   setIsCurrentComment(true)
    //   setShowEditComent(true);
    //   setHideEditCommentButton(true);
    //   //console.log(currentComment)
    // }


    const deleteBook = async (e) => {
      e.preventDefault()

      await bookService.deleteBook(bookId);
      

      setShowInfo(false)
      bookService.getAll()
        .then(result => setBook(result))
        .catch(err => console.log(err));
      //navigate(`/categories`)
      navigate(`/category/${String(book.category).toLowerCase()}`)
    }


    // const deleteComment = async (e) => {
    //   e.preventDefault()
    //   const data = e.target.parentNode.parentNode.parentNode.parentNode
    //   console.log(data.id)

    //   setCommentId(String(data.id))
    //   //console.log(commentId)

    //   await bookService.deleteComment(commentId)
      
    // }

    let nextId = 0

    let addComment = []
    
    useEffect(() => {
      bookService.getOne(bookId)
      .then(result => {
        setBook(result)
      })
    }, [bookId])

    useEffect(() => {
      userService.getOne()
      .then(result => setUser(result.username))
    }, [])

    useEffect(() => {
      userService.getOne()
      .then(result => setOwner(result._id))
    }, [])

    useEffect(() => {
      userService.getOne()
      .then(result => setImage(result.userImage))
    }, [])

    //console.log(image)

    useEffect(() => {
      bookService.getAllComments()
      .then(result => 
        result.forEach(comment => {
        if(comment.bookId === bookId){
          addComment[nextId] = {_id: comment._id, comment: comment.comments, username: comment.username, image: comment.userImage, ownerId: comment.ownerId};
          setCom(addComment)
          setCom((state) => {
            return state
          })
          nextId ++;
        }
      })
      )
    }, [addCommentClicked])

    
    const comment = async (e) => {
      e.preventDefault()
      //console.log(com)
      
      const data = Object.fromEntries(new FormData(e.target.form));
      //setComment(addComment)
      
      // setAddCommentClicked(data)
      // setAddCommentClicked((state) => {
      //   return state
      // })
      
      //console.log(addCommentClicked)
      
      await bookService.setComments(data, bookId, user, image, owner);
      await bookService.addComment(bookId, com);
      setCom(prevState => [...prevState, addComment]);
   
      // Set addCommentClicked to true after adding a comment
      setAddCommentClicked(true);
      //console.log(com)
      
      document.getElementById("comment").value = ""; 
    }
    
    //console.log(book)
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
                    {showEdit? <Edit key={bookId} setBook={setBook} setShowInfo={setShowInfo} category={category} bookId={bookId} book={book} setShowEdit={setShowEdit} show={showEdit} hideEditButton={setHideEditButton}/>:
                    <>
                    <h1>{book.title}</h1>
                    <h3>{book.author}</h3>
                    <p>{book.description}</p>
                    </>
                  }
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
          <Form id={comment._id}>
          <div className="d-flex flex-row comment-row">
            <div className="p-2"><span className="round"><img src={comment.image} alt="user" width="50"/></span></div>
            <div className="comment-text w-100">
                <h5>{comment.username}</h5>
                <div className="comment-footer">
                   
                </div>
                <p className="m-b-5 m-t-10">{comment.comment}</p>
                {showEditComment && <EditComment key={comment._id} com={com} nextId={nextId} addComment={addComment} setCom={setCom} show={showEditComment} commentId={commentId} comment={currentComment} setShowEditComment={setShowEditComent} hideButton={setHideEditCommentButton}/>}
                {/* <Modal.Footer>
                  {comment.ownerId == owner &&
                  <>
                    <Button variant="warning" onClick={showEditCommentPage} hidden={hideEditCommentButton}>Edit</Button>
                    <Button variant="danger" onClick={deleteComment}>Delete</Button>
                  </>
                  }
                </Modal.Footer> */}
            </div>
          </div>
          </Form>
        )
    
      })
    }
      

      </Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          {book.ownerId == localStorage.getItem("accessToken")&&
            <>
              <Button variant="warning" onClick={showEditPage} hidden={hideEditButton}>Edit</Button>
              <Button variant="danger" onClick={deleteBook}>Delete</Button>
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
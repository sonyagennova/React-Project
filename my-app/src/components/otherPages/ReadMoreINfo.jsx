import { useEffect, useState } from "react";
import * as bookService from "../../utils/booksService"
import * as userService from "../../utils/userService"
import * as commentService from "../../utils/commentService"
import { Modal, Button, Form, Stack, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Edit } from "./editPage";
import { EditComment } from "./editComment";

export function ReadMore({bookId, infoClose, show, setShowInfo, setBooks, userIds}){
  const accessToken = localStorage.getItem("accessToken")
    const [book, setBook] = useState([])
    const [com, setCom] = useState([])
    const [user, setUser] = useState([])
    const [owner, setOwner] = useState([])
    const [image, setImage] = useState([])

    // let ownerId = '';

    const [commentId, setCommentId] = useState('');

    const[addCommentClicked, setAddCommentClicked] = useState([]);
    const [hideEditCommentButton, setHideEditCommentButton]= useState(false);
    const [currentComment, setCurrentComment] = useState('');

    const category = book.category;

    const[showEdit, setShowEdit] = useState(false);
    const[showEditComment, setShowEditComent] = useState(false);
    const[hideEditButton, setHideEditButton] = useState(false);
    const navigate = useNavigate();

    // userIds.forEach(user => {
    //   if(user === localStorage.getItem("auth").split(",")[2]){
    //     ownerId = user;
    //   }
    // })

    const showEditPage = () => {
      setShowEdit(true)
      setHideEditButton(true);
    }

    // useEffect(() => {
    //   const selectedComment = com.find(comment => comment._id === commentId);
    //       if (selectedComment) {
    //         setCurrentComment(selectedComment.comment);
    //       }
    // }, [commentId, com])

    const showEditCommentPage = (e) => {
      const clickedCommentId = e.currentTarget.getAttribute('data-comment-id');
      const selectedComment = com.find(comment => comment._id === clickedCommentId);
    
      if (selectedComment) {
        setCurrentComment(selectedComment.comment);
      }
    
      setCommentId(clickedCommentId);
      setShowEditComent(true);
      setHideEditCommentButton(true);
    };


    const deleteBook = async (e) => {
      e.preventDefault()

      const deleteConfirmed = window.confirm("Are you sure you want to delete this comment?");
      if(deleteConfirmed){
        await bookService.deleteBook(bookId, accessToken);
        setShowInfo(false)
        bookService.getAll()
          .then(result => {
            setBooks(result)
          })
          .catch(err => console.log(err));
        //navigate(`/categories`)
        navigate(`/category/${String(book.category).toLowerCase()}`)
      }
    }


    const deleteComment = async (e) => {
      e.preventDefault();
      const commentIdToDelete = e.currentTarget.getAttribute('data-comment-id');
  
      try {
        const deleteConfirmed = window.confirm("Are you sure you want to delete this comment?");
        if(deleteConfirmed){
          setCommentId(commentIdToDelete);
    
          // Delete the comment from the server
          await commentService.deleteComment(commentIdToDelete, accessToken);
    
          // Update the UI by removing the deleted comment from the state
          setCom((prevState) => prevState.filter(comment => comment._id !== commentIdToDelete));
        }
      } catch (error) {
        console.error("Error deleting comment:", error);
        // Handle error (e.g., show an error message to the user)
      }
        
    }

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
      commentService.getAllComments()
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

      if(!localStorage.getItem("auth")){
        alert("You must login/register first to be able to add a comment!")
      } else {
        const data = Object.fromEntries(new FormData(e.target.form));
        
        await commentService.setComments(data, bookId, user, image, owner, accessToken);
        await commentService.addComment(bookId, com, accessToken);
        setCom(prevState => [...prevState, addComment]);
     
        // Set addCommentClicked to true after adding a comment
        setAddCommentClicked(true);
        //console.log(com)
        
      }
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
                    {/* {owner == ownerId && <h6 style={{color: "tomato"}}>Creator: {localStorage.getItem("auth").split(",")[0]}</h6>} */}
                    </>
                  }
            </div>
            </div>
      
          <Modal.Body>
            <Form.Label><h3>Reviews</h3></Form.Label>
            {localStorage.getItem("auth") &&
            <Form style={{marginBottom: "15px"}}>
      <Form.Group className="mb-3" controlId="comment">
        <Form.Control type="text" placeholder="Add your comment" name="comment"/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={comment}>
        Submit
      </Button>
    </Form>

            }
    
    {

      com.map(comment => {
        return(
          <Form key={comment._id} id={`commentForm_${comment._id}`}>
          <div className="d-flex flex-row comment-row">
            <div className="p-2"><span className="round"><img src={comment.image} alt="user" width="50"/></span></div>
            <div className="comment-text w-100">
                <h5>{comment.username}</h5>
                <div className="comment-footer">
                   
                </div>
                <p className="m-b-5 m-t-10">{comment.comment}</p>
                {showEditComment && <EditComment key={comment._id} com={com} setCom={setCom} show={showEditComment} commentId={commentId} comment={currentComment} setShowEditComment={setShowEditComent} hideButton={setHideEditCommentButton}/>}
                <Modal.Footer>
                  {comment.ownerId == owner &&
                  <>
                    <Button variant="warning" data-comment-id={comment._id} onClick={showEditCommentPage} hidden={hideEditCommentButton}>Edit</Button>
                    <Button variant="danger" data-comment-id={comment._id} onClick={deleteComment} >Delete</Button>
                  </>
                  }
                </Modal.Footer>
            </div>
          </div>
          </Form>
        )
    
      })
    }
      

      </Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          {localStorage.getItem("auth") &&
            book.ownerId == localStorage.getItem("auth").split(",")[2]?
            <>
              <Button variant="warning" onClick={showEditPage} hidden={hideEditButton}>Edit</Button>
              <Button variant="danger" onClick={deleteBook}>Delete</Button>
            </>:
            <></>
          }
          <Button variant="secondary" onClick={infoClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
      );
}
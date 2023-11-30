import { useState } from "react";
import { Link } from "react-router-dom";
//import {ReadMore} from "../otherPages/ReadMoreINfo";

export function BooksItem({
    bookId,
    title,
    author,
    publicationYear,
    imageUrl,
    category,
    onInfoClick,
    comments
}) {

    const infoClickHandler = () => {
        onInfoClick(bookId, comments);
    };

    return (
        <> 
                <div className="box b1" id={bookId}>
                    <div className="img-box">
                        <Link><img src={imageUrl}
                            alt={title}/></Link>
                    </div>
                    <div className="detail-box">
                        <h5>{title}</h5>
                        <h7>{author}</h7>
                        <Link className="page-a"
                        onClick={infoClickHandler}>Read More</Link>
                    </div>
                </div>
            
        </>
    );

}

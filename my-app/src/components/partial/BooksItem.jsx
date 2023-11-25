import { useState } from "react";
import { Link } from "react-router-dom";
import {ReadMore} from "../otherPages/ReadMoreINfo";

export function BooksItem({
    bookId,
    title,
    author,
    publicationYear,
    description,
    imageUrl,
    category,
    onInfoClick
}) {

    const infoClickHandler = () => {
        onInfoClick(bookId);
    };

    let shortDescription = "";

    if (description.length > 80) {
        shortDescription = description.substring(0, 80) + "...";
    } else {
        shortDescription = description;
    }
    return (
        <> 
                <div className="box b1" id={bookId}>
                    <div className="img-box">
                        <Link><img src={imageUrl}
                            alt={title}/></Link>
                    </div>
                    <div className="detail-box">
                        <h5>{title}</h5>
                        <p> {shortDescription} </p>
                        <Link className="page-a"
                        onClick={infoClickHandler}>Read More</Link>
                    </div>
                </div>
            
        </>
    );

}

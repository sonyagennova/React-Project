import { useState } from "react";
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
                        <a><img src={imageUrl}
                            alt={title}/></a>
                    </div>
                    <div className="detail-box">
                        <h5>{title}</h5>
                        <p> {shortDescription} </p>
                        <button className="page-a"
                        onClick={infoClickHandler}
                           //onClick={(e) => {isClicked(true); setData(e.target.parentNode.parentNode); OnClicked(clicked); SeeData(data); location.href = `http://localhost:5173/readmore`;}}
                           >Read More</button>
                    </div>
                </div>
            
        </>
    );

}

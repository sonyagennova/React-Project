export function BooksItem({
    bookId,
    title,
    author,
    publicationYear,
    description,
    imageUrl,
    category
}) {
    let shortDescription = "";
   
    if(description.length > 80){
        shortDescription = description.substring(0, 80) + "...";
    } else {
        shortDescription = description;
    }

    return (
        <>
            <h1>{category} Category Books</h1>

            <div className="container">
                <div className="animal_container">

                    <div className="box b1">
                        <div className="img-box">
                            <a><img src={imageUrl}
                                    alt={title}/></a>
                        </div>
                        <div className="detail-box">
                            <h5>{title}</h5>
                            <p> {shortDescription} </p>
                            <a className="page-a" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

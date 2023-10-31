import { Footer } from "../homePageSections/Footer";
import { Info } from "../homePageSections/InfoSection";
import { Nav } from "../partial/Navbar";
let short_description = "";

export function KidsPage(props){
    if(props.books[0].description.length > 80){
        short_description = props.books[0].description.substring(0, 80) + "...";
    } else {
        short_description = props.books[0].description;
    }
    return(
        <>
            <section className="animal_section1">
                <div className="container-fluid">
                    <Nav />
                </div>

                <h1>Kids Category Books</h1>

                <div className="container">
                    <div className="animal_container">
            
                        <div className="box b1">
                            <div className="img-box">
                                <a href={props.books[0].readingPageUrl}><img src={props.books[0].imgUrl} alt="" /></a>
                            </div>
                        <div className="detail-box">
                            <h5>{props.books[0].name}</h5>
                            <p>
                                {short_description}
                            </p>
                            <a className="page-a" href="">Read More</a>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <Info />
            <Footer />
        </>
    )
}
import {Footer} from "../homePageSections/Footer";
import {Info} from "../homePageSections/InfoSection";
import {NavLogin} from "../partial/NavbarLogin";
import * as userService from "../../utils/userService"
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();

    async function login(e){
        e.preventDefault();
    
        // Get data from form data
        const data = Object.fromEntries(new FormData(e.target.form));
    
        // Create new user at the server
        try{
            await userService.login(data);
        } catch(error){
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            throw new Error(error);
        }

        // setSession(sessionStorage.setItem("accessToken", login.accessToken))

        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        navigate("/");
      }
    return (
        <>
            <NavLogin/>
            <section className="contact_section layout_padding-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 offset-md-1">
                            <div className="form_container">
                                <div className="heading_container">
                                    <img src="./static/images/storytelling.png" alt=""/>
                                    <h2>Login</h2>
                                </div>
                                <form method="POST">
                                    <div>
                                        <input type="text" name="email" placeholder="Email" id="email"/>
                                    </div>
                                    <div>
                                        <input type="password" name="password" placeholder="Password" id="password"/>
                                    </div>
                                    <div className="d-flex ">
                                        <button onClick={login}>LOGIN</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div classname="col-md-6 px-0">
                            <div classname="map_container">
                                <div classname="map-responsive">
                                    <img src="./static/images/books-5.png"
                                        width={500}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <br/>
            <Info/>
            <Footer/>
        </>
    );
}

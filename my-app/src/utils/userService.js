const baseUrlRegister = "http://localhost:3030/users/register";
const loginUrl = "http://localhost:3030/users/login"
const baseUrl = "http://localhost:3030/users/"
const logoutUrl = "http://localhost:3030/jsonstore/users/logout"

import * as bookService from "../utils/booksService";

export const register = async(data) =>{
    const body = {
        username: data.name,
        email: data.email,
        password: data.password,
        rPassword: data.rPassword,
        userImage: data.userImage
    }

    if(body.password !== body.rPassword){
        alert("Passwords need to match!");
        throw new Error("Passwords need to match!");
    }

    let response = await fetch(baseUrlRegister, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const result = await response.json();

    if(!result.accessToken){
        alert(result.message)
        throw new Error(result.message);
    }

    localStorage.setItem("accessToken", result.accessToken);
    
    return result;
}

export const getOne = async () => {
    const response = await fetch(baseUrl+`me`,{
        method: "GET",
        headers: {
            "X-Authorization": localStorage.getItem("accessToken")
        }
    })
    return await response.json()
}

export const login = async(data) =>{
    const body = {
        email: data.email,
        password: data.password
    }

    const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const result = await response.json();
    console.log(result)

    if(!result.accessToken){
        alert(result.message)
        throw new Error(result.message);
    }


    localStorage.setItem("accessToken", result.accessToken);

    return result;
}

export const logout = async() =>{
    await fetch(logoutUrl, {
        method: "GET", 
        //headers: {"X-Authorization": accessToken}
    })

    localStorage.removeItem("accessToken")
}
const baseUrlRegister = "http://localhost:3030/jsonstore/users/register";
const loginUrl = "http://localhost:3030/jsonstore/users/login"
const logoutUrl = "http://localhost:3030/jsonstore/users/logout"

export const register = async(data) =>{
    const body = {
        name: data.name,
        email: data.email,
        password: data.password,
        rPassword: data.rPassword
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
    console.log(result.code)

    // if(result.code !== 200){
    //     alert(result.message)
    //     throw new Error(result.message);
    // }

    
    //console.log(result);
    sessionStorage.setItem("accessToken", result.accessToken);

    return result;
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
    console.log(result.accessToken);

    // if(result.code !== 200){
    //     alert(result.message)
    //     throw new Error(result.message);
    // }


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
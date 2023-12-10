const baseUrl = 'http://localhost:3030/data/comments';
const baseUrlBooks = 'http://localhost:3030/data/books';
const token = localStorage.getItem("accessToken");

export const getAllComments = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const editComment = async (data, commentId, accessToken) => {
    const body = {
        comments: data.comments
    }
    const response = await fetch(baseUrl+`/${commentId}`,{
        method:"PATCH",
        headers:{
            "Content-Type": "application/json",
            'X-Authorization': accessToken
        },
        body: JSON.stringify(body),
    })

    const result = await response.json()
    return result

}

export const setComments = async (data, bookId, user, image, ownerId, accessToken) => {
    const body = {
        comments: data.comment,
        bookId: bookId,
        username: user,
        userImage: image,
        ownerId: ownerId
    }

    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'X-Authorization': accessToken
        },
        body: JSON.stringify(body)
    })

    const result = await response.json()
    return result
}

export const getOneComment = async(commentId) => {
    const response = await fetch(`${baseUrl}/${commentId}`);
    const result = await response.json();

    return result;
}

export const addComment = async (_id, comments, accessToken) => {

    //setComments.push(data.comment)

    const body = {
        comments: comments
    };

    const response = await fetch(baseUrlBooks+`/${_id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(body)
    })

    const result = response.json()
    return result
}

export const deleteComment = async(commentId, accessToken) => {
    const response = await fetch(`${baseUrl}/${commentId}`, {
        method: "DELETE",
        headers: {
            'X-Authorization': accessToken
        },
    })

    return response
}
const baseUrl = 'http://localhost:3030/jsonstore/books';

export const getAllComments = async () => {
    const response = await fetch(baseUrl+"/comments");
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const editComment = async (data, commentId) => {
    const body = {
        comments: data.comments
    }
    const response = await fetch(baseUrl+`/comments/${commentId}`,{
        method:"PATCH",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
    })

    const result = await response.json()
    return result

}

export const setComments = async (data, bookId, user, image, ownerId) => {
    const body = {
        comments: data.comment,
        bookId: bookId,
        username: user,
        userImage: image,
        ownerId: ownerId
    }

    const response = await fetch(baseUrl+"/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    const result = await response.json()
    return result
}

export const getOneComment = async(commentId) => {
    const response = await fetch(`${baseUrl}/comments/${commentId}`);
    const result = await response.json();

    return result;
}

export const addComment = async (_id, comments) => {

    //setComments.push(data.comment)

    const body = {
        comments: comments
    };

    const response = await fetch(baseUrl+`/${_id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })

    const result = response.json()
    return result
}

export const deleteComment = async(commentId) => {
    const response = await fetch(`${baseUrl}/comments/${commentId}`, {
        method: "DELETE"
    })

    return response
}
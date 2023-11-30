const baseUrl = 'http://localhost:3030/jsonstore/books';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const getAllComments = async () => {
    const response = await fetch(baseUrl+"/comments");
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const getByCategory = async (category) => {
    const response = await fetch(`${baseUrl}`)
    const result = await response.json();
    Array.from(result).forEach(book => {
        if(book.category.toString().toLowerCase() == category){
            return book;
        }
    })
}

export const getOne = async (bookId) => {
    const response = await fetch(`${baseUrl}/${bookId}`);
    const result = await response.json();

    return result;
};

export const setComments = async (data, bookId, user, image) => {
    const body = {
        comments: data.comment,
        bookId: bookId,
        username: user,
        userImage: image
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

export const create = async (data, accessToken) => {
    const body = {
        title: data.title,
        author: data.author,
        description: data.description,
        publication_year: data.publication_year,
        imageUrl: data.imageUrl,
        category: data.category,
        ownerId: accessToken,
        comments: []
    };

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })

    const result = await response.json();
    //console.log(result);

    return result;
};
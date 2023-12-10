const baseUrl = 'http://localhost:3030/data/books';
const token = localStorage.getItem("accessToken");

export const getAll = async () => {
    const response = await fetch(baseUrl);
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

export const deleteBook = async(bookId, accessToken) => {
    const response = await fetch(`${baseUrl}/${bookId}`, {
        method: "DELETE",
        headers: {
            'X-Authorization': accessToken
        },
    })

    return response
}

export const editBook = async (data, bookId, accessToken) => {
    const body = {
        title: data.title,
        author: data.author,
        description: data.description,
        publication_year: data.publication_year,
        imageUrl: data.imageUrl
    };

    const response = await fetch(`${baseUrl}/${bookId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(body),
    })

    const result = await response.json();
    //console.log(result);

    return result;
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
            'X-Authorization': accessToken
        },
        body: JSON.stringify(body),
    })

    const result = await response.json();
    //console.log(result);

    return result;
};
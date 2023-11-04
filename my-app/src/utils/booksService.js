const baseUrl = 'http://localhost:3030/jsonstore/books';

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
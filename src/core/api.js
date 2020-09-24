const API_URL = process.env.API_URL || 'https://jsonplaceholder.typicode.com/todos';

const getMovies = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

export {
    getMovies
}
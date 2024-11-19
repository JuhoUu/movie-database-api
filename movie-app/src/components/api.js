import axios from 'axios';

const API_BASE_URL = 'https://movie-database-api-vc99.onrender.com/api';


export const getAllMovies = () => axios.get(`${API_BASE_URL}/getall`);
export const getMovieById = (id) => axios.get(`${API_BASE_URL}/${id}`);
export const addMovie = (movie) => axios.post(`${API_BASE_URL}/add`, movie);
export const updateMovie = (id, updatedData) =>
  axios.put(`${API_BASE_URL}/update/${id}`, updatedData);
export const deleteMovie = (id) => axios.delete(`${API_BASE_URL}/delete/${id}`);

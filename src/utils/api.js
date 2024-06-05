import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN || "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzhlYTQwYjAyN2E2NDlmZDUyM2ZlYzc0ZDNjZTZlYSIsInN1YiI6IjY1YzI0YmQyOGU4ZDMwMDE3Yjc4ZTZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5ZfEynl56fPDsMI5j3F77BOv8aczJKKSq19Ez0Sz7CY";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromAPI = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params
        });
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
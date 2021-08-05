import axios from 'axios';

const baseURL = process.env.VUE_APP_MOVIE_URL
  ? `${process.env.VUE_APP_MOVIE_URL}`
  : '';
const apiKey = process.env.VUE_APP_MOVIE_KEY
  ? `${process.env.VUE_APP_MOVIE_KEY}`
  : '';

const headers = {
  'Content-Type': 'application/json;charset=utf-8',
};

const params = {
  api_key: apiKey,
  language: 'en-US',
};

export default axios.create({
  baseURL,
  headers,
  params,
});

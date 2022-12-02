import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
   
    maxResults: '50',
   
  },
  headers: {
    'X-RapidAPI-Key': '3ad4b0ae59mshd46ba00057642dfp141005jsnc27ecbfe3e47',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
const {data} = await axios.get(`${BASE_URL}/${url}`, options)
return data;
}
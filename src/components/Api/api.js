import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTBiYzc4N2E3Y2UyY2JkYjQwYjFlYmMzNGZjYTJmMCIsInN1YiI6IjY1NTNiZGFiNjdiNjEzNDVkYmMwMmRiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHpHyLQruz3jLYmrNps4_zMlAKkULQZ-WSRGOBUyogg';
axios.defaults.headers.common['Accept'] = 'application/json';

const fetchData = async (path) => {
  try {
    const response = await axios.get(path);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;

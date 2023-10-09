import axios from 'axios';

export const addcompetitors = async (competitors) => {
  try {
    const responseData = await axios.post('http://localhost:8000/competitors', competitors, {
      withCredentials: true
    });
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

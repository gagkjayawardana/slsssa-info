import axios from 'axios';

export const createCompetition = async (competition) => {
  try {
    const responseData = await axios.post('http://localhost:8000/competition', competition, {
      withCredentials: true
    });
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

export const getCompetitions = async () => {
  try {
    const response = await axios.get('http://localhost:8000/competition', {
      withCredentials: true
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

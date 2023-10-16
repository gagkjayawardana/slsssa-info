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

export const getCompetitors = async (competitionName) => {
  try {
    const response = await axios.get('http://localhost:8000/competitors', competitionName, {
      withCredentials: true
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateCompetitor = async (competitor) => {
  try {
    const id = competitor.competitorId;
    const respone = await axios.put(`http://localhost:8000/competitors/${id}`, competitor, {
      withCredentials: true
    });
    return respone;
  } catch (err) {
    console.log(err);
  }
};

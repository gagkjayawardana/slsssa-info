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

export const getJuniorRifleMenService = async (competitionName) => {
  try {
    const response = await axios.get(
      'http://localhost:8000/competitors/juniorRifleMen',
      competitionName,
      {
        withCredentials: true
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getYouthRifleMenService = async (competitionName) => {
  try {
    const response = await axios.get(
      'http://localhost:8000/competitors/youthRifleMen',
      competitionName,
      {
        withCredentials: true
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getJuniorRifleWomenService = async (competitionName) => {
  try {
    const response = await axios.get(
      'http://localhost:8000/competitors/juniorRifleWomen',
      competitionName,
      {
        withCredentials: true
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getYouthRifleWomenService = async (competitionName) => {
  try {
    const response = await axios.get(
      'http://localhost:8000/competitors/youthRifleWomen',
      competitionName,
      {
        withCredentials: true
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getJuniorPistolMenService = async (competitionName) => {
  try {
    const response = await axios.get(
      'http://localhost:8000/competitors/juniorPistolMen',
      competitionName,
      {
        withCredentials: true
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getJuniorPistolWomenService = async (competitionName) => {
  try {
    const response = await axios.get(
      'http://localhost:8000/competitors/juniorPistolWomen',
      competitionName,
      {
        withCredentials: true
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getYouthPistolMenService = async (competitionName) => {
  try {
    const response = await axios.get(
      'http://localhost:8000/competitors/youthPistolMen',
      competitionName,
      {
        withCredentials: true
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getYouthPistolWomenService = async (competitionName) => {
  try {
    const response = await axios.get(
      'http://localhost:8000/competitors/youthPistolWomen',
      competitionName,
      {
        withCredentials: true
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

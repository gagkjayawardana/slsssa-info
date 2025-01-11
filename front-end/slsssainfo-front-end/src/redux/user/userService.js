import axios from 'axios';

export const loginUserService = async (user) => {
  try {
    const responseData = await axios.post('http://localhost:8000/user/login', user, {
      withCredentials: true
    });
    if (responseData) {
      return responseData;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getLogedUserService = async () => {
  try {
    const response = await axios.get('http://localhost:8000/user/getUser', {
      withCredentials: true
    });
    if (response) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const logoutUserService = async () => {
  try {
    const responseData = await axios.get('http://localhost:8000/user/logout', {
      withCredentials: true
    });
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

export const addUserService = async (userData) => {
  try {
    const userDetails = {
      name: userData.name,
      userName: userData.userName,
      password: userData.password
    };
    const responseData = await axios.post('http://localhost:8000/user/register', userDetails, {
      withCredentials: true
    });
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

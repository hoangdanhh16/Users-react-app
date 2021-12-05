import axios from "axios";

export const getByName = async (username) => {
  try {
    const { data } = await axios.post(`https://danhhoang-express-app.herokuapp.com/users/find`, {username});
    return data;
  } catch (error) {
    return false;
  }
};

export const updateUser = async (oldUser, newUser) => {
  try {
    await axios.post(`https://danhhoang-express-app.herokuapp.com/users`, { oldUser, newUser });
    return true;
  } catch (error) {
    return false;
  }
};

export const addUser = async (username, email, birthday) => {
  try{
    const data = await axios.post(`https://danhhoang-express-app.herokuapp.com/users/add`, {username, email, birthday});
    return data.data;
  } catch (error) {
    return false;
  }
}

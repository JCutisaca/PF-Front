import axios from "axios";
import { LOGIN_USER } from "../../actionTypes";

const endpoint = "https://pf-back-production-4255.up.railway.app/user/login/";

const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, { email, password });
      console.log(response.data);
      return dispatch({
        type: LOGIN_USER,
        payload: response.data,
      });

    } catch (error) {
      if (error.response) {
        console.error(
          "Server responded with status code:",
          error.response.status
        );
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
};

export default loginUser;
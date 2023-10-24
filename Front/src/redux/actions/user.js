// action.js
export const setUser = (userData) => {
  return {
    type: 'SET_USER',
    payload: userData,
  };
};

export const setProfileUsername = (token, username) => async (dispatch) => {
  try {
    await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + token, 
      },
      body: JSON.stringify({
        userName: username,
      }),
    });

    dispatch(
      setUser({
        username: username,
        firstname: '', 
        lastname: '',  
      })
    );

    // Get First Name and Last Name,
    // above code only update username
    dispatch(getProfileData(token));

  } catch (error) {
    console.log(error);
  }
};

export const getProfileData = (token) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + token,
      },
    });

    const data = await response.json();

    dispatch(
      setUser({
        username: data.body.userName,
        firstname: data.body.firstName,
        lastname: data.body.lastName,
      })
    );
  } catch (error) {
    console.log(error);
  }
    }
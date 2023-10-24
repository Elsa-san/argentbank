// authActions.js
export const login = (userData) => {
  return async (dispatch) => { 
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      console.log('HTTP Response:', response.status);

      if (response.status === 200) {
        const data = await response.json();
        dispatch({
          type: 'LOGIN',
          payload: {
            token: data.body.token,
          }
        });
      } else {
        // Handle errors
        dispatch({
          type: 'AUTH_ERROR',
          payload: {
            error: 'Email ou mot de passe non valides',
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};

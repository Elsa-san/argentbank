
export const logout = () => {
    return (dispatch) => {
        dispatch ({
            type:"LOGOUT"
        })
        localStorage.removeItem('token');
    }
}
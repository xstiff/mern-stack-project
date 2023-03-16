import axios from 'axios';



const API_URL = '/api/users/'

const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))  
    }
    return response.data
}

//logout
const logout = () => {
    localStorage.removeItem('user')
}


const login = async (userData) => {
    const response = await axios.post(API_URL + "login/", userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(
            await whoami(response.data.token)
        ))
        
    }
    return response.data
    
}

const whoami = async (token) => {
    try {
        const response = await axios.get(API_URL + "me/", {
            headers: { Authorization: `Bearer ${token}` }
        })
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
            return response.data
        }
        else {
            console.log('Other error: ', response.data)
        }
    }
    catch(er) {
        console.log('User not logged in or token expired: ', er)
        logout()
        window.location.reload();
        return er
    } 
}




const authService = {
    register,
    logout,
    login,
    whoami,

}

export default authService
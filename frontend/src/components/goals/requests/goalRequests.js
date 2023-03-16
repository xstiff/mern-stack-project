// const response = await axios.get(API_URL + "me/", {
//     headers: { Authorization: `Bearer ${token}` }
// })

import axios from 'axios';


const API_URL = "http://localhost:8080/api/goals/";


// Get all goals
// const GoalRequestList = async (token) => {
//     try {
//         const response = await axios.get(API_URL, {
//             headers: { Authorization: `Bearer ${token}` }
//         })
//         if (response.data) {
//             return response.data
//         }
//         else {
//             console.log('[Goals] Other error: ', response.data)
//         }
//     }
//     catch(er) {
//         console.log('[Goals] User not logged in or token expired: ', er)
//         logout()
//         window.location.reload();
//         return er
//     } 
// }
 
export const isLogged = (user) => {
    return {
        type: 'LOGGED_IN',
        payload:user
    }
   
}
export const isLoggedOut = (user) => {
    return {
        type: 'LOGGED_OUT',
        payload:user
    }
   
}

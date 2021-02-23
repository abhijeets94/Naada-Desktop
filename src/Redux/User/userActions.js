 
export const isLogged = (user) => {
    return {
        type: 'LOGGED_IN',
        payload:user
    }
}

import {createAuthProvider} from 'react-token-auth'

    
// export const { useAuth, authFetch, login, logout } = createAuthProvider({
//         getAccessToken: session => session.accessToken,
//         storage: localStorage,
//         onUpdateToken: token =>
//             fetch('/users/refresh', {
//                 method: 'POST',
//                 body: token.refreshToken,
//             }).then(r => r.json()),
//     })    
export const {useAuth, authFetch, login, logout} =
    createAuthProvider({
        accessTokenKey: 'access_token',
        onUpdateToken: (token) => fetch('/auth/refresh', {
            method: 'POST',
            body: token.refresh_token
        })
        .then(r => r.json())
    })    
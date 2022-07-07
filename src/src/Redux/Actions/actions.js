import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, updatePassword } from "firebase/auth"
import { google } from "../../Firebase/FirebaseConfig"
import { loginTypes } from "../Types/tyopes"



export const registerAsync = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name })
                dispatch(registerSync(email, password, name))
                console.log("Usuario registrado")
            })
            .catch(error => {
                console.warn(error, 'Usuario no registrado')
            })
    }
}

export const registerSync = (email, pass, name) => {
    return {
        type: loginTypes.register,
        payload: {
            email, pass, name
        }
    }
}

export const loginAsync = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(loginSync(user.email, user.password))
                console.log("Usuario logueado")
            })
            .catch(error => {
                console.warn(error, 'usuario no logueado');
            })
    }
}

export const loginSync = (user, pass) => {
    return {
        type: loginTypes.login,
        payload: { user, pass }
    }
}

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                console.log(user, 'Usuario autorizado')
            })
            .catch(error => {
                console.warn(error, 'No autorizado')
            })
    }
}


export const logoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signOut(auth)
            .then((user) => {
                console.log('Adios')
                dispatch(logout())

            })
            .catch(error => {
                console.warn(error)
            })
    }
}

export const logout = () => {
    return {
        type: loginTypes.logout
    }
}


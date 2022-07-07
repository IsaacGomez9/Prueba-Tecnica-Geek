import isLoggedIn  from  '../../routes/AppRoutes'

describe('validar si el usuario es esta logeado', () => {
    test('debe de Realizar el loggin', () => {
        const isAutenticad = isLoggedIn

        if (isAutenticad) {
            console.log('Usuario Autenticado, Bienvenido')
        } else {
            throw new Error('usuario No esta Autenticado, No es Bienvenido')
        }
    })
})
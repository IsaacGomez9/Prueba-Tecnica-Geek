import { LoginReducers } from '../../Redux/Reducers/LoginReducers'

import { loginTypes } from '../../redux/types/tyopes'

describe('pruebas en LoginReducers', () => {
    test('login', () => {
        const initialState = {}
        const action = {
            type: loginTypes.login,
            payload: {
                user: 'gomezisaacr@gmail.com',
                pass: '123'
            }
        }
        const state = LoginReducers(initialState, action);
        expect(state).toEqual({
            user: 'gomezisaacr@gmail.com',
            pass: '123'


        })
    })


    test('cerrar sesion - logout', () => {
        const initSate = {
            email: 'gomezisaacr@gmail.com',
        }

        const action = {
            type: loginTypes.logout,
        };


        const state = LoginReducers(initSate, action);
        expect(state).toEqual([])
    })

    test('state por default', ()=>{
        const initSate ={
            id: 'abc',
            name: 'Fernando'
        }


        const action = {
            type: loginTypes.hola
        };


        const state = LoginReducers(initSate, action);
        expect(state).toEqual(initSate)
    })
})


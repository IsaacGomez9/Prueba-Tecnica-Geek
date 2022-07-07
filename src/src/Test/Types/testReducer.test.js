import { typesAgendar, loginTypes, typesRegister } from "../../Redux/Types/tyopes"

describe('verificar types', () => {
    test('types de login', () => {
        expect(loginTypes).toEqual({
            login: 'login',
            register: 'register',
            logout: 'logout'
        })
    })
    test('types de registro', () => {
        expect(typesRegister).toEqual({
            register: '[Register-Usuario] register'
        })
    })
    test('types de agendar', () => {
        expect(typesAgendar).toEqual({
            add: '[Agendar-citas] agregar',
            list: '[Agendar-citas, list]',
            delete: '[Agendar-citas] eliminar',
            edit: '[Agendar-citas] edit',
        })
    })
})
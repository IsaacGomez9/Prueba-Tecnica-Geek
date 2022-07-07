import { typesAgendar } from "../Types/tyopes"


const initialState = {
    agendaCitas: []
}

export const ComentariosReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesAgendar.add:
            return {
                agendaCitas: [...state.agendaCitas, action.payload]
            }
        case typesAgendar.delete:
            return {
                agendaCitas: state.agendaCitas.filter(c => c.email !== action.payload)
            }

        case typesAgendar.edit:
            return {
                ...state
            }

        case typesAgendar.list:
            return {    
                agendaCitas: [...action.payload]
            }

        default:
            return state
    }

}
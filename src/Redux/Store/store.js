import LoginReducers from '../Reducers/LoginReducers'
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {ComentariosReducer} from '../Reducers/ComentariosReducers'
import { guardarDatos } from '../../Components/LocalStorage';

const reducers = combineReducers({
    LoginReducers,
    ComentariosReducer: ComentariosReducer
});

export const store = createStore(
    reducers,
    (
        applyMiddleware(thunk)
    )
);

store.subscribe(()=>{
    guardarDatos({
    ComentariosReducer: store.getState().ComentariosReducer
        
    })
})

export default store;
import { combineReducers } from 'redux'
import { generoReducer } from './generoReducer';
import { libroReducer } from './libroReducer';
import { personaReducer } from './personaReducer';

export const rootReducer = combineReducers({
    libro: libroReducer,
    persona: personaReducer,
    genero: generoReducer,
});
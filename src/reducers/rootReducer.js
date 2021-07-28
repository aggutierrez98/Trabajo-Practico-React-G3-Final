import { combineReducers } from 'redux'
import { generoReducer } from './generoReducer';
import { libroReducer } from './libroReducer';
import { personaReducer } from './personaReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
    libro: libroReducer,
    persona: personaReducer,
    genero: generoReducer,
    ui: uiReducer
});

import {combineReducers} from 'redux';

const initialState = {
    bandas: []
}
    
function bandasReducer(state = initialState, action) {

    if (action.type === "ADICIONAR") {
        return { bandas: [ ...state.bandas, { ...action.value}] };
    }
    else {
        return state;
    }
}

function singerReducer(state = { titulo : "Banda" }, action) {
    if(action.type === "ALTERAR") {
        return { titulo : action.value };
    }
    else {
        return state;
    }
}

const reducers = combineReducers({bandasReducer, singerReducer});

export default reducers;
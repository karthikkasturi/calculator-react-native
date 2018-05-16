import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {combineReducers} from 'redux'

import {
    EVALUATE_INPUT,
    NUMBER_INPUT,
    OPERAND_INPUT,
    CLEAR_SCREEN
} from '../constants'

const initialState = {
    isResultToBeDisplayed: false,
    evalExp: '',
    result: ''
}

export const evaluator  = (state = initialState , action) => {
    switch (action.type){
        case EVALUATE_INPUT:
            return {
                ...state,
                isResultToBeDisplayed: true,
                result: eval(state.evalExp),
            }
        case NUMBER_INPUT:
                return {
                    ...state,
                    isResultToBeDisplayed: false,
                    evalExp : !state.isResultToBeDisplayed ? state.evalExp + action.payload : action.payload,
                }    
        case OPERAND_INPUT:
                return {
                    ...state,
                    isResultToBeDisplayed: false,
                    evalExp : !state.isResultToBeDisplayed  
                                ? state.evalExp == '' ? '0' + action.payload : state.evalExp + action.payload 
                                : state.result + action.payload,
                    result : ''
                }
        case CLEAR_SCREEN:
            return {
                ...state,
                isResultToBeDisplayed: false,
                evalExp : '',
                result: ''
            }
        default:
            return state;
    }
}


const rootReducer = combineReducers({evaluator})

export default function configureStore(){
    let store = createStore(rootReducer, applyMiddleware(thunk));
    return store
} 

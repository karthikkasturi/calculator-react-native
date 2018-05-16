import { EVALUATE_INPUT, NUMBER_INPUT, OPERAND_INPUT, CLEAR_SCREEN } from './constants'

export function evaluateInput(payload){
    return {
        type: EVALUATE_INPUT
    }
}

export function numberInput(payload){
    return {
        type: NUMBER_INPUT,
        payload
    }
}

export function operandInput(payload){
    return {
        type: OPERAND_INPUT,
        payload
    }
}

export function clearScreen(){
    return {
        type: CLEAR_SCREEN
    }
}

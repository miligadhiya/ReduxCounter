import { DECREASE, INCREASE } from "./Action"


export const Add=()=>{
    return{
        type:INCREASE
    }
}

export const Remove=()=>{
    return{
        type:DECREASE
    }
}
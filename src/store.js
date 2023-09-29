import { legacy_createStore } from "redux";
import { readucer } from "./Reducer";


export const Store =legacy_createStore(readucer)

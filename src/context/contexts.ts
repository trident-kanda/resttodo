import { createContext } from "react";
type list = {
    id:number,
    name:string
}
export const setListContext = createContext<any>(undefined)
export const deleteContext = createContext<any>(undefined)
export const listContext = createContext<[] | list[]>([])
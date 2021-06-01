import { createContext } from "react";
type list = {
    id:number,
    name:string
    state:boolean
}

export const setListContext = createContext<undefined | ((value:list[])=>void)>(undefined)
export const deleteContext = createContext<undefined | ((id:number) => void)>(undefined)
export const listContext = createContext<[] | list[]>([])
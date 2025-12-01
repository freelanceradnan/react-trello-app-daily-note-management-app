import { createContext,useReducer} from "react";
import { listReducer } from "../reducers/Lists";

export const TaskContext=createContext()

const ListProvider=({children})=>{
    const [lists,dispatchTaskAction]=useReducer(listReducer,[])
    return(
        <TaskContext.Provider value={{lists,dispatchTaskAction}}>
            {children}
        </TaskContext.Provider>
    )
}
export default ListProvider
import { createContext,useReducer} from "react";
import { BoardReducer } from './../reducers/Boards';


export const BoardContext=createContext()
const BoardProvider=({children})=>{
    const [boards,dispatchBoardActions]=useReducer(BoardReducer,[])
return(
    <BoardContext.Provider value={{boards,dispatchBoardActions}}>
{children}
    </BoardContext.Provider>
)
}
export default BoardProvider
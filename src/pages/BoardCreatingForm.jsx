import { useContext, useState } from "react";

import { BoardContext } from "../contexts/Board";


const BoardCreatingForm = () => {
    const {dispatchBoardActions}=useContext(BoardContext)
     const [boardTitle,setBoardTitle]=useState("")
     const changeHandler=(e)=>{
        setBoardTitle(e.target.value)
     }
     const submitHandler = (e) => {
  e.preventDefault();
  if (boardTitle.trim() === "") return alert("please enter a valid text");
  dispatchBoardActions({ type: "CREATE_BOARD", payload: boardTitle });
  setBoardTitle("");
};


    return (
       
        <div className="form-section">
            <form onSubmit={submitHandler}>
                <input type="text" value={boardTitle} 
                onChange={changeHandler}
                />
                <button type="submit">Create Board</button>
            </form>
            
        </div>
    );
};

export default BoardCreatingForm;
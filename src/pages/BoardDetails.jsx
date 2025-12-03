import { Link, useParams } from "react-router-dom";

import Additem from "../components/Additem";

import AdditemForm from "../components/AdditemForm";
import { useContext, useState } from "react";
import { ListContext } from "../contexts/List";
import { BoardContext } from "../contexts/Board";

const BoardDetails = () => {
    const submitHandler=(e)=>{
        e.preventDefault();
        const id=Date.now()+""
dispatchListAction({type:"CREATE_LIST",payload:{
    id,
    title:listLitle,
    boardId:boardId
}})
dispatchBoardActions({
    type:"ADD_LIST_ID_INTO_BOARD",
    payload:{
    id:boardId,
    listId:id,
    }

})
setEditMode(false)
setListTitle("")
    }
    const [editMode,setEditMode]=useState(false)
    const {boardId}=useParams()
    const [listLitle,setListTitle]=useState("")
    const{dispatchBoardActions}=useContext(BoardContext)
    const {lists,dispatchListAction}=useContext(ListContext)
    const redenderList=lists.filter(item=>item.boardId===boardId)
    return (
        <div className="d-flex m-top-sm flex-direction-row">
            <Link to="/">back to boards</Link>
        {redenderList.map(lists=>(
            <li key={lists.id}>{lists.title}</li>
        ))}
        {editMode===false?(
            <Additem
            listAddItem={true}
            setEditMode={setEditMode}
            />

        ):(
            <AdditemForm
            listForm={true}
            listLitle={listLitle}
            onChangeHandler={(e)=>setListTitle(e.target.value)}
           submitHandler={submitHandler}
            />
        )}
        </div>
    );
};

export default BoardDetails;
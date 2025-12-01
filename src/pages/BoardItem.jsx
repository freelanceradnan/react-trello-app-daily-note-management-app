import { useContext } from 'react';
import { BoardContext } from '../contexts/Board';
import { ListContext } from '../contexts/List';
import { TaskContext } from '../contexts/Task';

const BoardItem = ({board}) => {
    const {dispatchBoardActions}=useContext(BoardContext)
    const {dispatchListAction}=useContext(ListContext)
    const {dispatchTaskAction}=useContext(TaskContext)
    const removeHandler=(e)=>{
        e.preventDefault()
        e.stopPropagation()
dispatchBoardActions({type:"REMOVE_BOARD",payload:board.id})
board.lists.forEach((listId)=>{
    dispatchListAction({type:"REMOVE_LIST",payload:listId})
})
board.tasks.forEach((taskId)=>{
    dispatchTaskAction({type:"REMOVE_TASK",payload:taskId})
})
    }
    return (
        <div>
            <h5>{board.title}</h5>
            <p onClick={removeHandler}>x</p>
        </div>
    );
};

export default BoardItem;
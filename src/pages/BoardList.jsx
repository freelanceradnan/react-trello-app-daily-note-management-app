import { useContext } from 'react';
import { BoardContext } from '../contexts/Board';
import { Link } from 'react-router-dom';
import BoardItem from '../pages/BoardItem'

const BoardList = () => {
    const {boards}=useContext(BoardContext)
    return (
        <div class="board-main">
           {boards.map(boards=>(
            <Link key={boards.id} to={`/board/:id`}>
                <BoardItem board={boards} />
            </Link>
           ))} 
        </div>
    );
};

export default BoardList;
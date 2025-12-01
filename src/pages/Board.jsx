import BoardCreatingForm from "./BoardCreatingForm";
import BoardList from "../pages/BoardList"

const Board = () => {
    return (
        <div>
            <BoardCreatingForm/>
            <BoardList/>
        </div>
    );
};

export default Board;
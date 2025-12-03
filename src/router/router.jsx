import { createBrowserRouter } from "react-router-dom";
import Board from "../pages/Board";

import BoardDetails from "../pages/BoardDetails";


 const router=createBrowserRouter([
{path:"/",element:<Board/>},
{path:"/board/:boardId",element:<BoardDetails/>}
])
export default router;
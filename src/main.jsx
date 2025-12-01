
import { createRoot } from 'react-dom/client'
// import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import BoardProvider from './contexts/Board.jsx'
import ListProvider from './contexts/List.jsx'
import TaskProvider from './contexts/Task.jsx'
createRoot(document.getElementById('root')).render(
  <BoardProvider>
    <ListProvider>
      <TaskProvider>
        <RouterProvider router={router} />
      </TaskProvider>
    </ListProvider>
  </BoardProvider>
);


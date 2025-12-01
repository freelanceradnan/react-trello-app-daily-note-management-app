export const TasksReducer=(tasks=[],action)=>{
    switch(action.type){
        case "CREATE_TASKS":{
            const newTasks={
                id:action.payload.id,
                title:action.payload.title,
                listId:action.payload.listId,
                boardId:action.payload.boardId
            }
            return[...tasks,newTasks]
        }
        case "CHANGE_TASKS_NAME":{
            const updateTasks=tasks.map(item=>{
                if(item.id===action.payload.id){
                    return{
                        ...item,
                        title:action.payload.title
                    }
                }
                return item
            })
            return updateTasks
        }
        case "REMOVE_TASK":{
            return tasks.filter(item=>item.id!==action.payload.id)
        }
        case "CHANGE_LIST_ID_A_TASK":{
            const updateTasks=tasks.map(item=>{
                if(item.id===action.payload.id){
                    return{
                        ...item,
                        listId:action.payload.listId
                    }
                }
                return item
            })
            return updateTasks
        }
        case "CHANGE_BOARD_ID_A_TASK":{
            const updatedTasks=tasks.map(item=>{
                if(item.id===action.payload.id){
                    return{
                        ...item,
                        boardId:action.payload.boardId
                    }
                }
                return item
            })
            return updatedTasks
        }
        default:{
            return tasks
        }

    }
}
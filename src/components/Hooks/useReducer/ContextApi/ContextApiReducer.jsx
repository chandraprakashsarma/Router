export const initialState = {
    tasks:[]
}

export function taskReducer(state,action) {
    switch(action.type){
        case 'ADD_TASK': 
          return {task:[...state.tasks, action.payload]}
        case 'REMOVE_TASK': return {tasks:state.tasks}
        case 'TOGGLE_TASK': return {}
    }

}
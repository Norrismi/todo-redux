// If calling and API or getting values from a database we would want to return the data at the PAYLOAD

//Payload is the information you want to store


export const addTodo = (todo) => (dispatch) => {
    dispatch({
        type: 'ADD_TODO',
        payload: todo
    })
}

export const removeTodo = (id) => (dispatch) => {
    dispatch({
        type: 'REMOVE_TODO',
        payload: id
    })
}

export const completeTodo = (id) => (dispatch) => {
    dispatch({
        type: 'COMPLETE_TODO',
        payload: id
    })
}

export const deleteAllCompletedTodos = () => (dispatch) => {
    dispatch({
        type: 'DELETE_ALL_COMPLETED_TODOS',
      
    })
}


const initialState = {
    todos: [
        {text: 'Todo 1', completed: false},
        {text: 'Todo 2', completed: false}
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'TOGGLE_COMPLETED':
            const newState = JSON.parse(JSON.stringify(state));
            newState.todos[action.index].completed = !newState.todos[action.index].completed;
            return newState;
        default:
            return state;
    }
};

export default reducer;
const initialState = {
    todos: [
        {text: 'Todo 1', completed: false},
        {text: 'Todo 2', completed: false}
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    }
};

export default reducer;
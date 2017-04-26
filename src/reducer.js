const reducer = (state, action) => {
    switch (action.type){
        case '@INIT':
            state = {todos: []};
        default:
            return state;
    }
};
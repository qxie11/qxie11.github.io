import {
    ADD_TASK,
    INPUT_CHANGE,
    REMOVE_TASK,
    ADD_LINE,
    REMOVE_ALL
} from './todoActions';

const initialState = {
    tasks: [],
    line: '',
    inputValue: ''
}

export const ToDoReducer = (state = initialState, action) => {

    switch(action.type) {
       case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat(action.payload)
            };
        
         case REMOVE_ALL:
            return {
                ...state,
                tasks: [],
                line: ''
            };

        case ADD_LINE:
            return {
                ...state,
                line: action.payload
            }

        case INPUT_CHANGE:
            return {
                ...state,
                inputValue: action.payload
            };
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((item, ind, arr) => {
                   
                    return ind != action.payload;
                })
            }
    }

    return state;
}
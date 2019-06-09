export const ADD_TASK = "ADD_TASK";
export const INPUT_CHANGE = "INPUT_CHANGE";
export const REMOVE_TASK = "REMOVE_TASK";
export const ADD_LINE = "ADD_LINE";
export const REMOVE_ALL = "REMOVE_ALL"


export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
});

export const removeAll = (task = []) => ({
    type: REMOVE_ALL,
    payload: task
})

export const addLine = (task) => ({
    type: ADD_LINE,
    payload: task
});

export const inputChange = (str) => ({
    type: INPUT_CHANGE,
    payload: str
})

export const removeTask = (ind) => ({
    type: REMOVE_TASK,
    payload: ind
})
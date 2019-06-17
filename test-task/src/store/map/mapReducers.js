import {
    SAVE_LOCATION
} from './mapActions';

const initialState = {
    location: []
}

export const mapReducer = (state = initialState, action) => {
    
    if(state.location.length == 100) {
        state.location.splice(0,1);
        state.location.splice(0,1);
    }

    switch(action.type) {
        case SAVE_LOCATION:
            return {
                ...state,
                location: state.location.concat(action.payload)
            };
    }

    return state;
}
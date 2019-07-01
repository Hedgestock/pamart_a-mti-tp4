import * as action_types from '../actions/action-types'

let defaultState = [];

let TARGET_IDS = 0;

const target = (state, action) => {
    switch (action.type) {
        case action_types.ADD_TARGET:
            return { id: TARGET_IDS++, v: 3, x: Math.floor(Math.random() * (90 - 10 + 1)) + 10, y: Math.floor(Math.random() * (90 - 10 + 1)) + 10 };
        case action_types.UPDATE_TARGET:
            return action.target;
        default:
            return state;
    }
}

const targets = (state = defaultState, action) => {
    console.log(action);

    switch (action.type) {
        case action_types.ADD_TARGET:
            return [...state, target(undefined, action)];
        case action_types.UPDATE_TARGET:
            return state.map(t => t.id === action.target.id ? target(t, action) : t);
        case action_types.DELETE_TARGET:
            return state.filter(t => t.id !== action.id);
        default:
            return state
    }
}

export default targets;
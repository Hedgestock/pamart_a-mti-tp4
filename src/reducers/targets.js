import * as action_types from '../actions/action-types'

let defaultState = [
    {
        id: 0, x: 10, y: 10, v: 2,
    },
     {
        id: 1, x: 20, y: 20, v: 2,
    },
     {
        id: 2, x: 30, y: 30, v: 2,
    },
];

let TARGET_IDS = 0;

const target = (state, action) => {
    switch (action.type) {
        case action_types.ADD_TARGET:
            return { id: TARGET_IDS++ };
        case action_types.UPDATE_TARGET:
            return {
                ...state,
                //score: score - 1, FIXME ???
            }
        default:
            return state;
    }
}

const targets = (state = defaultState, action) => {
    switch (action.type) {
        case action_types.ADD_TARGET:
            console.log("add target")
            return [...state, target(undefined, action)];
        case action_types.UPDATE_TARGET:
            return state.map(t => t.id === action.id ? target(t, action) : t);
        case action_types.DELETE_TARGET:
            return state.filter(t => t.id !== action.id);
        default:
            return state
    }
}

export default targets;
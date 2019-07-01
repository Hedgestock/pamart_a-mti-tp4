import * as action_types from './action-types'

export function addTarget() {
    return { type: action_types.ADD_TARGET };
}
export function deleteTarget(id) {
    return { type: action_types.DELETE_TARGET, id: id };
}
export function decreaseLives() {
    return { type: action_types.DECREASE_LIVES };
}
export function gameStart() {
    return { type: action_types.GAME_START };
}
export function gameStop() {
    return { type: action_types.GAME_STOP };
}
export function gameStartRequested() {
    return { type: action_types.GAME_START_REQUESTED };
}
export function gameStopRequested() {
    return { type: action_types.GAME_STOP_REQUESTED };
}
export function updateTarget(target) {
    return { type: action_types.UPDATE_TARGET, target: target };
}
export function clickTarget(id, q) {
    return { type: action_types.CLICK_TARGET, id: id, q: q };
}
export function updateDifficulty(d) {
    return { type: action_types.UPDATE_DIFFICULTY, d: d };
}
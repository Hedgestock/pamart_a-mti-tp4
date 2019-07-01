import { delay } from 'redux-saga'
import { fork, take, race, call, put, select } from 'redux-saga/effects'
import { GAME_START, GAME_START_REQUESTED, CLICK_TARGET } from '../actions/action-types'
import { gameStart, deleteTarget, addTarget, updateTarget } from '../actions/index'
import Target from '../components/Target';

let TIME_INTERVAL = 1000;
let TICK_RATE = 1000;

function* waitForClickedTarget() {
    while (yield select(({ game }) => game.isStarted)) {
        let expectedAction = {};
        yield take(action => expectedAction = action)
        if (expectedAction.type === CLICK_TARGET) {
            yield put(deleteTarget(expectedAction.id));
        }
    }
}

function* decreaseTargetsValue() {
    while (yield select(({ game }) => game.isStarted)) {
        yield delay(TIME_INTERVAL);
        let targets = yield select(({ targets }) => targets);
        for (let target of targets) {
            yield put(updateTarget({ ...target, v: target.v - 1 }))
        }
    }
}


function* gameSaga() {
    while (true) {
        yield take(GAME_START_REQUESTED);
        yield put(gameStart());
        yield fork(waitForClickedTarget);
        yield fork(decreaseTargetsValue);
        while (yield select(({ game }) => game.isStarted && game.lives > 0)) {
            yield delay(TICK_RATE);
            yield put(addTarget());
        }
    }
}

export default gameSaga;
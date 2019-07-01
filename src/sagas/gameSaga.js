import { delay } from 'redux-saga'
import { fork, take, put, select } from 'redux-saga/effects'
import { GAME_START_REQUESTED, CLICK_TARGET } from '../actions/action-types'
import { gameStart, deleteTarget, addTarget, updateTarget, decreaseLives, gameStop } from '../actions/index'


function* waitForClickedTarget() {
    while (yield select(({ game }) => game.isStarted)) {
        let action = yield take(action => action)
        if (action.type === CLICK_TARGET) {
            yield put(deleteTarget(action.id));
        }
    }
}

function* decreaseTargetsValue() {
    while (yield select(({ game }) => game.isStarted)) {
        yield delay(yield select(({ game }) => game.timeInterval));
        let targets = yield select(({ targets }) => targets);
        for (let target of targets) {
            if (target.v <= 1) {
                yield put(deleteTarget(target.id));
                yield put(decreaseLives());
                if (yield select(({ game }) => game.lives <= 0)) {
                    yield put(gameStop());
                }
            }
            else {
                yield put(updateTarget({ ...target, v: target.v - 1 }));
            }
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
            let game = yield select(({ game }) => game);
            yield delay(game.tickRate);
            yield put(addTarget());
            if (game.clicked >= 5) {
                yield put(addTarget());
            }
            if (game.clicked >= 15) {
                yield put(addTarget());
            }
        }
    }
}

export default gameSaga;
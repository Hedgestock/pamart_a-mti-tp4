import { delay } from 'redux-saga'
import { take, race, call, put, select} from 'redux-saga/effects'
import { GAME_START, GAME_START_REQUESTED, CLICK_TARGET } from '../actions/action-types'
import { gameStart } from '../actions/index'

function* gameSaga() {
    while (true) {
        yield take(GAME_START_REQUESTED);
        console.log("fsdhgfu");
        yield put(gameStart());
        const state = yield select();
        console.log(state);
        while (state.game.lives > 0) {
            yield take(CLICK_TARGET);
            console.log('clicked')
        }
    }
}

export default gameSaga;
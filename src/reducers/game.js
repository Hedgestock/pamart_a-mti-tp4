import { GAME_START, GAME_STOP, DECREASE_LIVES, CLICK_TARGET, UPDATE_DIFFICULTY } from '../actions/action-types'

const defaultState = {
  lives: 3,
  score: 0,
  isStarted: false,
  tickRate: 1000,
  timeInterval: 1000,
  difficulty: 1,
  combo: -2,
  clicked: 0,
};

const game = (state = defaultState, action) => {
  switch (action.type) {
    case GAME_START:
      return {
        ...state,
        isStarted: true
      };
    case GAME_STOP:
      return defaultState;
    case DECREASE_LIVES:
      return {
        ...state,
        lives: state.lives - 1,
        combo: -2,
      };
    case CLICK_TARGET:
      return {
        ...state,
        score: state.score + 2 ** Math.ceil(state.combo / 3),
        combo: state.combo + 1,
        clicked: state.clicked + 1,
      };
    case UPDATE_DIFFICULTY:
      return {
        ...state,
        difficulty: action.d,
        timeInterval: 1000 / action.d,
      };
    default:
      return state;
  }
};

export default game;

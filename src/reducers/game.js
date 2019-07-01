import { GAME_START, GAME_STOP, DECREASE_LIVES, CLICK_TARGET, UPDATE_DIFFICULTY } from '../actions/action-types'

const defaultState = {
  lives: 3,
  score: 0,
  isStarted: false,
  tickRate: 1000,
  timeInterval: 1000,
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
      };
      case CLICK_TARGET:
      return {
        ...state,
        score: state.score + 1,
      };
      case UPDATE_DIFFICULTY:
          return {
            ...state,
            difficulty: state.score + 1,
          };
    default:
      return state;
  }
};

export default game;

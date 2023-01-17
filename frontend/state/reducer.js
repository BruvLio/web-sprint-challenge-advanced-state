// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_COUNTERCLOCKWISE, MOVE_CLOCKWISE, SET_QUIZ_INTO_STATE } from './action-types';

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case (MOVE_COUNTERCLOCKWISE):
      if (--state < 0) return 5;
      return state--

    case (MOVE_CLOCKWISE):
      if (++state > 5) return 0;
      return state++

    default:
      return state;

  }
}

const initialQuizState = null
const quiz = (state = initialQuizState, action) => {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      return action.payload
    default:
      return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })

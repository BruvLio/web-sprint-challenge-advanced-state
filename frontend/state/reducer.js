// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_COUNTERCLOCKWISE, MOVE_CLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE, RESET_FORM } from './action-types';

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
const selectedAnswer = (state = initialSelectedAnswerState, action) => {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
      return action.payload
    default:
      return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return action.payload
    default:
      return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.id]: action.payload.value
      }
    case RESET_FORM:
      alert("I'm HERERERERER")
      return {
        ...state
      }
    default:
      return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })


// [1, 2, 3, 4]
// const TestArr = [
//   {
//     name: 'Lionel',
//     age: 65,
//     gender: 'Male'
//   },
//   {
//     name: 'Toya',
//     age: 40,
//     gender: 'Female'
//   },
//   {
//     name: 'Stark',
//     age: 30,
//     gender: 'Male'
//   }
// ]

// const newArr = TestArr.map((person) => ({[person.gender]: person.name }))
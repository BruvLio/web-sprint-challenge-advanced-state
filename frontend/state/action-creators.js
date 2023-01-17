import axios from "axios";
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE } from "./action-types"


// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  return ({ type: MOVE_CLOCKWISE });
}

export function moveCounterClockwise() {
  // alert("counter-Clock")
  return ({ type: MOVE_COUNTERCLOCKWISE });
}

export function selectAnswer() { }

export function setMessage() { }

export function setQuiz() { }

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch({ type: SET_QUIZ_INTO_STATE, payload: null }); // resets the quiz state

    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    axios
      .get('http://localhost:9000/api/quiz/next')
      .then(res => dispatch({ type: SET_QUIZ_INTO_STATE, payload: res.data }))
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state

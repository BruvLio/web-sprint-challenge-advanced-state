import axios from "axios";
import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, RESET_FORM, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from "./action-types"


// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  return ({ type: MOVE_CLOCKWISE });
}

export function moveCounterClockwise() {
  // alert("counter-Clock")
  return ({ type: MOVE_COUNTERCLOCKWISE });
}

export function selectAnswer(answerId) {
  return ({ type: SET_SELECTED_ANSWER, payload: answerId });
}

export function setMessage(message) {
  return ({ type: SET_INFO_MESSAGE, payload: message })
}

export function setQuiz(quiz) {
  return function (dispatch) {
    axios
      .post('http://localhost:9000/api/quiz/new', { question_text: quiz.newQuestion, true_answer_text: quiz.newTrueAnswer, false_answer_text: quiz.newFalseAnswer })
      .then(res => {
        dispatch({ type: SET_INFO_MESSAGE, payload: res.statusText })
        resetForm()
      })
  }

  // setMessage(res.data.message)
  // resetForm()
}

export function inputChange(id, value) {
  return ({ type: INPUT_CHANGE, payload: { id, value } })
}

export function resetForm() {
  // alert("I'm at reset action creater")
  return ({ type: RESET_FORM })
}

// ❗ Async action creators
export function fetchQuiz() {
  // alert("YOLO")
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
export function postAnswer(quiz_id, answer_id) {
  return function (dispatch) {
    axios
      .post('http://localhost:9000/api/quiz/answer', { quiz_id, answer_id })
      .then(res => {
        dispatch({ type: SET_SELECTED_ANSWER, payload: null })
        dispatch({ type: SET_INFO_MESSAGE, payload: res.data.message })
        fetchQuiz()(dispatch)
      })
    // `{ "quiz_id": "LVqUh", "answer_id": "0VEv0" }`
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


// const lionel = ( number ) => {
//   return number;
// }
// lionel(3)
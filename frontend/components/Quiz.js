import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchQuiz, selectAnswer, postAnswer } from '../state/action-creators';

const Quiz = (props) => {
  useEffect(() => {
    if (!props.quiz) //Reviewed with Chris
    {

      props.fetchQuiz()
    }
  }, [])

  return (
    <div id="wrapper">
      {
        // is the quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz
          ? (
            <>
              <h2>{props.quiz.question}</h2>

              <div id="quizAnswers">
                <div className={`answer ${props.selectedAnswer === props.quiz.answers[0].answer_id ? `selected` : null}`}>
                  {props.quiz.answers[0].text}

                  <button onClick={() => props.selectAnswer(props.quiz.answers[0].answer_id)}>
                    {props.selectedAnswer === props.quiz.answers[0].answer_id ? `SELECTED` : `Select`}
                  </button>
                </div>

                <div className={`answer ${props.selectedAnswer === props.quiz.answers[1].answer_id ? `selected` : null}`}>
                  {props.quiz.answers[1].text}
                  <button onClick={() => props.selectAnswer(props.quiz.answers[1].answer_id)} >
                    {props.selectedAnswer === props.quiz.answers[1].answer_id ? `SELECTED` : `Select`}
                  </button>
                </div>
              </div>

              <button disabled={!props.selectedAnswer} id="submitAnswerBtn" onClick={() => props.postAnswer(props.quiz.quiz_id, props.selectedAnswer)}>Submit answer</button>
            </>
          ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  };
}

export default connect(mapStateToProps, { fetchQuiz, selectAnswer, postAnswer })(Quiz)

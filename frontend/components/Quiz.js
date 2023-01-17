import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchQuiz } from '../state/action-creators';

const Quiz = (props) => {
  useEffect(() => {
    props.fetchQuiz()
  },[])
  
  console.log(props.quiz)
  return (
    <div id="wrapper">
      { 
        // is the quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz
          ? (
            <>
              <h2>{props.quiz.question}</h2>

              <div id="quizAnswers">
                <div className="answer selected">
                  {props.quiz.answers[0].text}
                  
                  <button>
                    Select
                  </button>
                </div>

                <div className="answer">
                {props.quiz.answers[1].text}
                  <button>
                    Select
                  </button>
                </div>
              </div>

              <button id="submitAnswerBtn">Submit answer</button>
            </>
          ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz
  };
}

export default connect(mapStateToProps, { fetchQuiz })(Quiz)

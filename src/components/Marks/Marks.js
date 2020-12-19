import React from 'react';
import s from './marks.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  onClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  onClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, mark) => acc + mark, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          onClickGood={this.onClickGood}
          onClickNeutral={this.onClickNeutral}
          onClickBad={this.onClickBad}
        />

        <div>
          <h1>Statistics</h1>
          <p>
            Good: <span>{this.state.good}</span>
          </p>
          <p>
            Neutral: <span>{this.state.neutral}</span>
          </p>
          <p>
            Bad: <span>{this.state.bad}</span>
          </p>
          <p>
            Total: <span>{this.countTotalFeedback()}</span>
          </p>
          <p>
            Positive Feedback:{' '}
            <span>{this.countPositiveFeedbackPercentage()}%</span>
          </p>
        </div>
      </div>
    );
  }
}

export default App;

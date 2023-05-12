import React from 'react';
// import { Statistics } from '../Statistics/Statistics';

class FeedbackOptions extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  getTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  render() {
    const feedbackTypes = ['good', 'neutral', 'bad'];

    const buttons = feedbackTypes.map(type => (
      <button
        type="button"
        onClick={() => this.onLeaveFeedback(type)}
        key={type}
      >
        {type}
      </button>
    ));

    const values = feedbackTypes.map(type => (
      <p key={type}>{this.state[type]}</p>
    ));
    const totalFeedback = this.getTotalFeedback();
    return (
      <div>
        <h1>Please leave feedback</h1>
        {buttons}
        <br />

        {values}
        <p>Total: {totalFeedback}</p>
      </div>
    );
  }
}

export default FeedbackOptions;

import React from 'react';
import { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <FeedbackOptions />
        <Statistics />
      </div>
    );
  }
}
//   onLeaveFeedback = type => {
//     this.setState(prevState => ({
//       [type]: prevState[type] + 1,
//     }));
//   };
// }

export default App;

import React, { Component } from "react";


import FeedbackOptions from "./Cafe/FeedbackOptions";
import Notification from "./Cafe/Notification";
import Section from "./Cafe/Section";
import Statistics from "./Cafe/Statisyics";

import { DivMain } from "./Cafe.expreso.styled";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
};  


countTotalFeedback = () => {
  const { good, neutral, bad} = this.state;
  const totalVoice = good + neutral + bad;
  return totalVoice;
}


countPositiveFeedbackPercentage = () => Math.round((this.state.good / this.countTotalFeedback()) * 100);

onButtonClick = (vote) => {
  this.setState(prevState => ({
    [vote]: prevState[vote] + 1,
  }));
};



render() {
  const { good, neutral, bad } = this.state;
  const total = this.countTotalFeedback();
  const positivePercentage =this.countPositiveFeedbackPercentage();

  return (
    <DivMain>
      <Section title="Pleace leave your feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onButtonClick} />
      </Section>

      <Section title="Statistics">
        {total === 0
          ? <Notification message="There is no feedback" />
          : <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />}
      </Section>
    </DivMain>
  );
};


export default App;


import React from 'react';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <div>
    <p>
      Good: <span>{good}</span>
    </p>
    <p>
      Neutral: <span>{neutral}</span>
    </p>
    <p>
      Bad: <span>{bad}</span>
    </p>
    <p>
      Total: <span>{countTotalFeedback}</span>
    </p>
    <p>
      Positive Feedback: <span>{countPositiveFeedbackPercentage}%</span>
    </p>
  </div>
);

export default Statistics;

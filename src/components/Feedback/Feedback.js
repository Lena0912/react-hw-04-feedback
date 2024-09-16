

export const Feedback = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Good:{good} </p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total feedback:{totalFeedback}</p>
      <p>Positive:{positivePercentage}%</p>
    </div>
  );
};
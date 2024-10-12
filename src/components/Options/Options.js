import { Container, FeedbackBtn } from "./Options.styled";


export const Options = ({updateFeedback, onReset, totalFeedback}) => {
    return (
      <Container>
        <FeedbackBtn onClick={() => updateFeedback('good')}>Good</FeedbackBtn>
        <FeedbackBtn onClick={() => updateFeedback('neutral')}>
          Neutral
        </FeedbackBtn>
        <FeedbackBtn onClick={() => updateFeedback('bad')}>Bad</FeedbackBtn>
        {totalFeedback > 0 && (
          <FeedbackBtn onClick={onReset}>Reset</FeedbackBtn>
        )}
      </Container>
    );
}
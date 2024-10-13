import styled from 'styled-components';


export const Container = styled.div`
display: flex;
flex-direction: row;
gap: 16px;

`;

export const FeedbackBtn = styled.button`
  background-color: ${p => p.theme.colors.bgColor};
  text-align: center;
  color: ${p => p.theme.colors.textColor};
  border: 1px solid gray;
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover,
  &:focus {
    background-color: #78f137;
    outline: none;
  }
`;
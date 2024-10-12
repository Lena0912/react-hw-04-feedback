import styled from 'styled-components';


export const Container = styled.div`
display: flex;
flex-direction: row;
gap: 16px;

`;

export const FeedbackBtn = styled.button`
  background-color: #f1dd38;
  color: gray;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #78f137;
    outline: none;
  }
`;
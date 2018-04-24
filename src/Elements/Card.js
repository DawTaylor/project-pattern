import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: ${props => props.theme.button.raised0}
  padding: 10px;
  background: blue;

  .cardTitle {
    font-size: 28pt;
    color: white;
  }
`;

export const CardTitle = styled.h1`
  font-size: 28pt;
`;

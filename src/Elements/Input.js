import styled from 'styled-components';

export const Input = styled.input`
  padding: 8px;
  font-size: 16pt;
  font-family: ${props => props.theme.fontFamily};
  box-shadow: ${props => props.theme.input.shadow};
  border: 0
  border-radius: 3px;
`;

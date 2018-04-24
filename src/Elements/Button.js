import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 15px;
  border: 0;
  border-radius: 3px;
  font-size: 12pt;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.primaryColor};
  box-shadow: ${props => props.theme.button.raised0};
  transition: all 0.5s;
  margin: 5px;

  &:hover {
    box-shadow: ${props => props.theme.button.raised1};
  }

  &.is-large {
    font-size: 14pt;
    padding: 15px 20px;
  }

  &.is-small {
    font-size: 10pt;
    padding: 5px 10px;
  }

  &.is-success {
    color: ${props => props.theme.secondaryColor};
    background-color: ${props => props.theme.button.success};
  }

  &.is-danger {
    color: ${props => props.theme.secondaryColor};
    background: ${props => props.theme.button.danger};
  }

  &.is-warning {
    background: ${props => props.theme.button.warning};
  }

  &.is-info {
    color: ${props => props.theme.secondaryColor};
    background: ${props => props.theme.button.info};
  }

  &.is-link {
    color: ${props => props.theme.secondaryColor};
    background: ${props => props.theme.button.link};
  }

  &.is-primary {
    color: ${props => props.theme.secondaryColor};
    background: ${props => props.theme.button.primary};
  }
`;

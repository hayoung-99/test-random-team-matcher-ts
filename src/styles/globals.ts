import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  input[type='radio'] {
    position: absolute;
    overflow: hidden;
    border: 0;
    padding: 0;
  }

  input[type='radio'] + label:before {
    content: '';
    display: inline-block;
    margin-right: 8px;
  }

  input[type='radio'] + label:before {
    width: 20px;
    height: 20px;
  }
  
  input[type='radio']:checked + label:before {
  }
`;

export default GlobalStyles;

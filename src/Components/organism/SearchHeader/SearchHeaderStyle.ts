import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const SearchHeaderStyle = styled.div`
  .header {
    width: 100%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    padding: 1rem 2.5rem;
    position: fixed;
    top: 0px;

    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 0.87);
      background-color: #242424;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    @media (prefers-color-scheme: light) {
      color: #213547;
      background-color: #ffffff;
    }

    form {
      width: 100%;
    }
  }

  input {
    width: 50%;
    height: 30px;
    padding: 1.5rem;
    border: 1px solid ${Colors.neutral};
    border-radius: 6px;
    color: ${Colors.neutral};
  }

  input:focus {
  border: 1px solid ${Colors.brand};
  outline:  1px solid ${Colors.brand};
  }

  @media screen and (max-width: 600px) {
    .header {
      padding: 0.8rem 1.5rem;
      width: 80%;
    }
    input {
      width: 100%;
    }
  }
`

export default SearchHeaderStyle

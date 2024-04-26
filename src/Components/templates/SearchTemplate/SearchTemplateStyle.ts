import styled from 'styled-components'

const SearchTemplateStyle = styled.div`
  padding: 2.5rem;

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 1.5rem;
  }
`

export default SearchTemplateStyle

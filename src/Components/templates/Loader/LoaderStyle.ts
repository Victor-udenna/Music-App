import styled from 'styled-components'

const LoaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  height: 100vh;
  width: 100vw;
  z-index: 4000;

  p {
    font-size: 14px;
    font-weight: 600;
  }
`

export default LoaderStyle

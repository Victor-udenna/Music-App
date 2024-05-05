import styled from 'styled-components'

const CardLoaderStyle = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 6px;
  margin-top: 2rem;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background-color: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #bbbbbb 18%, #eeeeee 33%);
  background-size: 800px 104px;
  position: relative;

  @media screen and (max-width: 600px) {
    height: 150px;
  }

  @keyframes placeHolderShimmer {
    0% {
      background-position: -800px 0;
    }
    100% {
      background-position: 800px 0;
    }
  }
`

export default CardLoaderStyle

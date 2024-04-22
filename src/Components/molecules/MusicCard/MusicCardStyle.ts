import styled from 'styled-components'

const MusicCardStyle = styled.div`
  .music-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 8px;
    }

    p {
      font-weight: 600;
      text-align: center;
    }
  }

  @media screen and (max-width: 600px) {
    .music-card {
      img {
      width: 110px;
      height: 110px;
      } 
    }  
  }
`

export default MusicCardStyle

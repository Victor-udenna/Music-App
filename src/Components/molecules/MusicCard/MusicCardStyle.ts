import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const MusicCardStyle = styled.div`
  .music-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;
    img {
      width: 160px;
      height: 160px;
      border-radius: 8px;
    }

    p {
      font-weight: 600;
      text-align: center;
    }
    .active{
      color: ${Colors.brand};
    }
  }

  @media screen and (max-width: 600px) {
    .music-card {
      img {
      width: 150px;
      height: 150px;
      } 
    }  
  }
`

export default MusicCardStyle

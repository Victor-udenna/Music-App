import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const HeaderStyle = styled.div`
  background-color: ${Colors.header};
  .hero {
    background-image: url('../../../assets/images/hero.svg');
    background-size: 30%;
    background-position: right;
    background-repeat: no-repeat;
    transform: rotateY(180deg);
    padding: 2.7rem;

    .hero-header__text {
      transform: rotateY(-180deg);
      font-family: 'Inter', sans-serif;
      color: #fff;
      font-weight: 600;
      text-align: end;
      font-size: 2.2rem;
    }

    .hero-header__desc {
      transform: rotateY(-180deg);
      font-family: 'Inter', sans-serif;
      color: #fff;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 8px;
      font-size: 1.8rem;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .hero {
      background-size: 0px;
      padding: 28px;
      .hero-header__text {
        font-size: 19px;
        text-align: start;
      }

      .hero-header__desc {
        font-size: 16px;
        justify-content: start;
        margin-top: 4px;
        img {
          width: 17px;
          height: 17px;
        }
      }
    }
  }
`

export default HeaderStyle

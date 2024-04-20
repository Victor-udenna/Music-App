import HeaderStyle from './HeaderStyle'
import Text from '../../atoms/Text/Text'
import heroimg from '../../../assets/images/hero.svg'
import Img from '../../atoms/Image/Img'
import moonicon from "../../../assets/icons/moon.svg"
import sunicon from "../../../assets/icons/sun-symbol.svg"

const Header = () => {
  return (
    <HeaderStyle>
      <header
        style={{
          backgroundImage: `url('${heroimg}')`,
        }}
        className="hero"
      >
        <Text value="Your favourite tunes" className={'hero-header__text'} />
        <div className={"hero-header__desc"}>
          <span>All</span><Img image={sunicon}/> <span>and all</span> <Img image={moonicon}/>{' '}
        </div>
      </header>
    </HeaderStyle>
  )
}

export default Header

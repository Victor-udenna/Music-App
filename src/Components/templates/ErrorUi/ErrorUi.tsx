import Img from '../../atoms/Image/Img'
import errorImg from '../../../assets/images/error-img.svg'
import Text from '../../atoms/Text/Text'
import ErrorUiStyle from './ErrorUiStyle'
import { useNavigate } from 'react-router-dom'

const ErrorUi = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <ErrorUiStyle>
      <div className="error-ui">
        <Img className="error_img" image={errorImg} />
        <Text className="error-header-text" value="An error occured" />
        <Text
          className="error-description"
          value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad tenetur blanditiis beatae a quibusdam illo harum repudiandae veritatis nostrum architecto."
        />
        <div className="button-container">
          <button onClick={()=>{handleGoHome()}} className="home-btn">Go Home</button>
          <button onClick={()=>{handleReload()}} className="reload-btn">Reload Page</button>
        </div>
      </div>
    </ErrorUiStyle>
  )
}

export default ErrorUi

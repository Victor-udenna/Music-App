import NotFoundTemplateStyle from "./NotFoundTemplateStyle"
import Img from '../../atoms/Image/Img'
import errorImg from '../../../assets/images/error-img.svg'
import Text from '../../atoms/Text/Text'
import { useNavigate } from 'react-router-dom'


const NotFoundTemplate = () => {

    const navigate = useNavigate()

    const handleGoHome = () => {
      navigate('/')
    }

    const handleBackPage = () => {
        navigate(-1);
      }

  return (
   <NotFoundTemplateStyle>
       <div className="error-ui">
        <Img className="error_img" image={errorImg} />
        <Text className="error-header-text" value="Page Not Found" />
        <Text
          className="error-description"
          value="Oops! The page you are looking for does not exist."
        />
        <div className="button-container">
          <button onClick={()=>{handleGoHome()}} className="home-btn">Go Home</button>
          <button onClick={()=>{handleBackPage()}} className="reload-btn">Back</button>
        </div>
      </div>
   </NotFoundTemplateStyle>
  )
}

export default NotFoundTemplate
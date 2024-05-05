import Text from '../../atoms/Text/Text'
import LoaderStyle from './LoaderStyle'
import { Audio } from 'react-loader-spinner'

const Loader = () => {
  return (
    <LoaderStyle>
      <div>
        <Audio
          height="70"
          width="70"
          color="#574fd8"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />
      </div>
      <Text className="loading-text" value="loading..." />
    </LoaderStyle>
  )
}

export default Loader

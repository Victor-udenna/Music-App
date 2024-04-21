import MusicPlayerStyle from './MusicPlayerStyle'
// import audioSample from '../../../assets/So-Will-I-100-Billion-X-Hillsong-Worship.mp3'
import staticImg from '../../../assets/There_Is_More_by_Hillsong_Worship_(Official_Album_Cover).jpg'
import Img from '../../atoms/Image/Img'
import Text from '../../atoms/Text/Text'
import { FaStepForward } from 'react-icons/fa'
import { FaStepBackward } from 'react-icons/fa'
import { LuShuffle } from 'react-icons/lu'
import { LuRepeat2 } from 'react-icons/lu'
import { PiSpeakerSimpleLowFill } from 'react-icons/pi'
import { IoMdHeart } from 'react-icons/io'
import { FaPlay } from 'react-icons/fa'
// import { FaPause } from 'react-icons/fa'
// import { PiSpeakerSimpleXFill } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";

const MusicPlayer = () => {
  return (
    <MusicPlayerStyle>
      {/* <audio controls>
        <source src={audioSample} />
      </audio> */}
      <div className="music-player">
        <div className="music__functionality">
          <div className="controls-container control-header">
            <Img className="coverimg" image={staticImg} />
            <Text className="music-title" value="Nothing's Playing" />
          </div>
          <div className="controls-container">
            {' '}
            <button className="backfront-btn fwd-btn">
              <FaStepBackward size={18} />
            </button>
            <button className="playpause-btn">
              <FaPlay size={20} />
            </button>
            <button className="backfront-btn back-btn">
              <FaStepForward size={18} />
            </button>
          </div>
        </div>

        <div className="music__seek__container">
          <input className='seek' type="range" min="0" max={10} />
        </div>

        <div className="multi__control">
          <button>
            <IoMdHeart size={18} />
          </button>
          <button>
            <LuShuffle size={18} />
          </button>
          <button>
            <LuRepeat2 size={18} />
          </button>
          <button>
            <PiSpeakerSimpleLowFill size={18} />
          </button>
        </div>

        <button className='toggle-func_btn'><HiDotsHorizontal size={18}/></button>
      </div>
    </MusicPlayerStyle>
  )
}

export default MusicPlayer

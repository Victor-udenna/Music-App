import { useState, useRef } from 'react'
import MusicPlayerStyle from './MusicPlayerStyle'
import audioSample from '../../../assets/So-Will-I-100-Billion-X-Hillsong-Worship.mp3'
import staticImg from '../../../assets/images/Solid Mid Grey.jpg'
import Img from '../../atoms/Image/Img'
import Text from '../../atoms/Text/Text'
import { FaStepForward } from 'react-icons/fa'
import { FaStepBackward } from 'react-icons/fa'
import { LuShuffle } from 'react-icons/lu'
import { LuRepeat2 } from 'react-icons/lu'
import { PiSpeakerSimpleLowFill } from 'react-icons/pi'
import { IoMdHeart } from 'react-icons/io'
import { FaPlay } from 'react-icons/fa'
import { FaPause } from 'react-icons/fa'
import { PiSpeakerSimpleXFill } from 'react-icons/pi'
import { HiDotsHorizontal } from 'react-icons/hi'
import Colors from '../../../helpers/Colors'
// import axios from 'axios'
// import { useEffect } from 'react'

const MusicPlayer = () => {
  const audioRef = useRef<any | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isMuted, setIsMuted] = useState(false)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: any) => {
    const newTime = parseFloat(e.target.value)
    setCurrentTime(newTime)
    audioRef.current.currentTime = newTime
  }

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  // const getSong = async ()=>{
  //   const options = {
  //     method: 'GET',
  //     url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
  //     params: {
  //       q: 'anendlessocean'
  //     },
  //     headers: {
  //       'X-RapidAPI-Key': '5312ed048amsh03ba71e9c5ebb31p10336djsnc538ae0495e9',
  //       'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  //     }
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(()=>{
  // getSong()
  // }, [])

  return (
    <MusicPlayerStyle>
      {/* <audio controls>
        <source src={audioSample} />
      </audio> */}
      <div className="music-player">
        <audio
          ref={audioRef}
          src={audioSample}
          onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        />
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
            <button onClick={togglePlay} className="playpause-btn">
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
            <button className="backfront-btn back-btn">
              <FaStepForward size={18} />
            </button>
          </div>
        </div>

        <div className="music__seek__container">
          <input
            className="seek"
            type="range"
            min="0"
            max={audioRef.current ? audioRef.current.duration : 0}
            value={currentTime}
            onChange={handleSeek}
          />
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
          <button onClick={toggleMute}>
            {isMuted ? (
              <PiSpeakerSimpleXFill size={18} color={Colors.brand} />
            ) : (
              <PiSpeakerSimpleLowFill size={18} />
            )}
          </button>
        </div>

        <button className="toggle-func_btn">
          <HiDotsHorizontal size={18} />
        </button>
      </div>
    </MusicPlayerStyle>
  )
}

export default MusicPlayer

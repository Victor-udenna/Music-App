import { useState, useRef, useEffect } from 'react'
import MusicPlayerStyle from './MusicPlayerStyle'
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
import { useSelector } from 'react-redux'

const MusicPlayer = () => {
  const data = useSelector((state: any) => state.musicData.data)
  let dataIndex = data.index;
  let collectionLength = data?.data?.length
  const audioRef = useRef<any | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0);


  useEffect(() => {
    if (data && data.index !== undefined) {
      setSelectedIndex(data.index);
    }
  }, [data]);

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
    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }


  const handleForward = () => {
    if (selectedIndex < data.data.length - 1) {
      setSelectedIndex((prevIndex) => prevIndex + 1);
    } if(selectedIndex === data.data.length -1){
      setSelectedIndex(0)
    }
  };

  const handleBackfoward = () => {
    if (selectedIndex > 0) {
      setSelectedIndex((prevIndex) => prevIndex - 1);
    } if( selectedIndex === 0){
      setSelectedIndex(data.data.length -1)
    }
  }

  const shortenString = (str: string) => {
    const { length } = str
    return length > 11 ? `${str.slice(0, 8)}...` : str
  }

  const audioSrc = data && data?.data && data?.data[selectedIndex]?.preview
  const albumCover = data && data?.data && data?.data[selectedIndex]?.album.cover_big
  const songTitle = data && data?.data && data?.data[selectedIndex]?.title
  console.log(data)

  return (
    <MusicPlayerStyle>
      <div className="music-player">
        <audio
          ref={audioRef}
          src={audioSrc}
          onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        />
        <div className="music__functionality">
          <div className="controls-container control-header">
            <Img className="coverimg" image={albumCover || staticImg} />
            <Text
              className="music-title"
              value={songTitle ? shortenString(songTitle) : "Nothing's Playing"}
            />
          </div>
          <div className="controls-container">
            {' '}
            <button
              onClick={() => handleBackfoward()}
              className="backfront-btn fwd-btn"
            >
              <FaStepBackward size={18} />
            </button>
            <button onClick={togglePlay} className="playpause-btn">
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
            <button
              onClick={() => handleForward()}
              className="backfront-btn back-btn"
            >
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

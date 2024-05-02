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
import { useSelector, useDispatch } from 'react-redux'
import { activeSong } from '../../../services/dataSlice'

const MusicPlayer = () => {
  const data = useSelector((state: any) => state.musicData.data)

  const dispatch = useDispatch()
  const audioRef = useRef<any | null>()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [audioLoop, setAudioLoop] = useState(false)
  const [autoPlay, setAutoplay] = useState(false)
  const [isShuffle, setIsshuffle] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (data && data.index !== undefined) {
      setSelectedIndex(data.index)
      setIsPlaying(true)
      setAutoplay(true)
      setIsLoading(false)
    }
  }, [data])

  useEffect(() => {
    const lagTimeout = setTimeout(() => {
      setIsLoading(false)
    }, 32)

    return () => clearTimeout(lagTimeout)
  }, [])

  const handlePlay = () => {
    audioRef?.current?.pause()
    setIsPlaying(false)
  }

  const handlePause = () => {
    audioRef?.current?.play()
    setIsPlaying(true)
  }

  const handleSeek = (e: any) => {
    const newTime = parseFloat(e.target.value)
    setCurrentTime(newTime)
    audioRef.current.currentTime = newTime
  }

  const handleItemMove = () => {
    handlePlay()
    setIsPlaying(true)
    setAutoplay(true)
  }

  const toggleLoop = () => {
    setAudioLoop(!audioLoop)
    setIsshuffle(false)
  }

  const toggleMute = () => {
    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const toggleShuffle = () => {
    setIsshuffle(!isShuffle)
    setAudioLoop(false)
  }

  const handleForward = () => {
    if (selectedIndex < data?.data?.length - 1) {
      setSelectedIndex((prevIndex) => prevIndex + 1)
    }
    if (selectedIndex === data?.data?.length - 1) {
      setSelectedIndex(0)
    }
    handleItemMove()
  }

  const handleBackfoward = () => {
    if (selectedIndex > 0) {
      setSelectedIndex((prevIndex) => prevIndex - 1)
    }
    if (selectedIndex === 0) {
      setSelectedIndex(data?.data?.length - 1)
    }
    handleItemMove()
  }

  const moveTonextItem = () => {
    if (
      audioRef?.current?.currentTime === audioRef?.current?.duration &&
      audioLoop === false
    ) {
      handleForward()
      handleItemMove()
      if (isShuffle) {
        const randomNumber = Math.floor(Math.random() * data?.data?.length)
        setSelectedIndex(randomNumber)
      }
    }
  }

  const setActiveSongTitle = () => {
    if (data && data?.data) {
      dispatch(activeSong(data?.data[selectedIndex]?.id))
    }
  }

  useEffect(() => {
    moveTonextItem()
    setActiveSongTitle()
  }, [audioRef?.current?.currentTime])

  const shortenString = (str: string) => {
    const { length } = str
    return length > 11 ? `${str.slice(0, 7)}...` : str
  }

  const audioSrc = data && data?.data && data?.data[selectedIndex]?.preview
  const albumCover =
    data && data?.data && data?.data[selectedIndex]?.album.cover_big
  const songTitle = data && data?.data && data?.data[selectedIndex]?.title

  return (
    <MusicPlayerStyle>
      <div className="music-player">
        <audio
          ref={audioRef}
          src={audioSrc}
          onTimeUpdate={() => setCurrentTime(audioRef?.current?.currentTime)}
          loop={audioLoop}
          autoPlay={autoPlay}
          muted={isMuted}
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
            {audioSrc && !isLoading ? (
              <>
                {isPlaying ? (
                  <button onClick={handlePlay} className="playpause-btn">
                    <FaPause size={20} />
                  </button>
                ) : (
                  <button onClick={handlePause} className="playpause-btn">
                    <FaPlay size={20} />
                  </button>
                )}
              </>
            ) : (
              <button disabled className="notactive_button">
                <FaPlay size={20} />
              </button>
            )}
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
            max={audioRef.current ? audioRef.current.duration || 0 : 0}
            value={currentTime}
            onChange={handleSeek}
          />
        </div>

        <div className="multi__control">
          <button>
            <IoMdHeart size={18} />
          </button>
          <button
            onClick={() => {
              toggleShuffle()
            }}
          >
            <LuShuffle color={isShuffle ? Colors.success : ''} size={18} />
          </button>
          <button
            onClick={() => {
              toggleLoop()
            }}
          >
            <LuRepeat2 color={audioLoop ? Colors.success : ''} size={18} />
          </button>
          <button
            onClick={() => {
              toggleMute()
            }}
          >
            {isMuted ? (
              <PiSpeakerSimpleXFill size={18} color={Colors.success} />
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

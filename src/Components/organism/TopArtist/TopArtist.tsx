import TopArtistStyle from './TopArtistStyle'
import Text from '../../atoms/Text/Text'
import { FaAngleLeft } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6'
import Img from '../../atoms/Image/Img'
import defaultImg from '../../../assets/images/defaultAvatar.jpg'
import MusicCard from '../../molecules/MusicCard/MusicCard'
import {
  useGetTopArtistQuery,
  useGetTopArtistSongQuery,
} from '../../../services/MusicApi'
import { useDispatch, useSelector } from 'react-redux'
import { setData, clearData } from '../../../services/dataSlice'
import { useRef } from 'react'

const TopArtist = () => {
  const dispatch = useDispatch()
  const data = useSelector((state: any) => state.musicData.data)

  const { data: topArtist, isFetching } = useGetTopArtistQuery('8697922')
  const { data: topArtistSong } = useGetTopArtistSongQuery('ruth b')
  console.log(isFetching)

  const handleSetMusic = (index: number) => {
    if (data) {
      dispatch(clearData())
    }
    dispatch(setData({ data: topArtistSong.data, index }))
  }

  const wrapperRef = useRef<any>(null)

  const scrollLeft = () => {
    const wrapper = wrapperRef.current
    wrapper.scrollLeft -= 182
  }

  const scrollRight = () => {
    const wrapper = wrapperRef.current
    wrapper.scrollLeft += 182
  }

  console.log(data)
  return (
    <TopArtistStyle>
      <section className="top-artist">
        <div className="top-artist_header">
          <Text className="" value="Your Top Artist" />
          <hr></hr>
          <div className="btn-container">
            <button onClick={scrollLeft} className="scoll-left_btn">
              <FaAngleLeft />
            </button>
            <button onClick={scrollRight} className="scoll-right_btn">
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="top-artist_container">
          <div className="top-artist_wrapper" ref={wrapperRef}>
            <div className="artist-container">
              <Img
                className="artist-img"
                image={topArtist ? topArtist.picture_big : defaultImg}
              />
              <Text
                className="artistname"
                value={topArtist ? topArtist.name : 'loading'}
              />
            </div>
            {topArtistSong &&
              topArtistSong.data.map((music: any, i: number) => {
                return (
                  <MusicCard
                    key={i}
                    onClick={() => {
                      handleSetMusic(i)
                    }}
                    musicImg={music.album.cover_big}
                    title={music.title}
                  />
                )
              })}
          </div>
        </div>
      </section>
    </TopArtistStyle>
  )
}

export default TopArtist

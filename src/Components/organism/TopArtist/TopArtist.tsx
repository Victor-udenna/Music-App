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
import { useDispatch } from 'react-redux'
import { setData } from '../../../services/dataSlice'

const TopArtist = () => {
  const dispatch = useDispatch()

  const { data: topArtist, isFetching } = useGetTopArtistQuery('8697922')
  const { data: topArtistSong } = useGetTopArtistSongQuery('ruth b')
  console.log(isFetching)

  const handleSetMusic = (index: number) => {
    dispatch(setData({ data: topArtistSong.data, index }))
  }

  return (
    <TopArtistStyle>
      <section className="top-artist">
        <div className="top-artist_header">
          <Text className="" value="Your Top Artist" />
          <hr></hr>
          <div className="btn-container">
            <button className="scoll-left_btn">
              <FaAngleLeft />
            </button>
            <button className="scoll-right_btn">
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="top-artist_container">
          <div className="top-artist_wrapper">
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

import {useRef } from 'react'
import Text from '../../atoms/Text/Text'
import DiscoverArsistCard from '../../molecules/DiscoverArtistCard/DiscoverArsistCard'
import DiscoverArtistStyle from './DiscoverArtistStyle'
import { FaAngleLeft } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6'
import { musicArtists } from '../../../helpers/discoverArtist'
import { useGetArtistQuery } from '../../../services/MusicApi'
import { useDispatch } from 'react-redux'
import { setData, clearData } from '../../../services/dataSlice'

const DiscoverArtist = () => {
  const discoverwrapperRef = useRef<any>(null)

  const dispatch = useDispatch()

  const handleSetMusic = async (data: any, index: number) => {
    dispatch(clearData())
    await dispatch(setData({data: data, index: index}))
  }

  const scrollLeft = () => {
    const wrapper = discoverwrapperRef.current
    wrapper.scrollLeft -= 100
  }

  const scrollRight = () => {
    const wrapper = discoverwrapperRef.current
    wrapper.scrollLeft += 100
  }

  const artistData = musicArtists && musicArtists?.map((artistName) => {
    const { data } = useGetArtistQuery(artistName)
    return { data }
  })


  return (
    <DiscoverArtistStyle>
      <div className="discover-artist">
        <div className="discover-artist_header">
          <Text className="" value="You may also like" />
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

        <div className="discover-artist_container">
          <div className="discover-artist_wrapper" ref={discoverwrapperRef}>
           { artistData && artistData?.map((artist)=>{
              if (artist && artist.data && artist.data.data && artist.data.data.length > 0)
            return <DiscoverArsistCard
            onClick={() => handleSetMusic(artist?.data?.data, 0)}
            artistImg={artist?.data?.data[0]?.artist?.picture_big}
            title={artist?.data?.data[0]?.artist?.name}
          />
           })}
          </div>
        </div>
      </div>
    </DiscoverArtistStyle>
  )
}

export default DiscoverArtist

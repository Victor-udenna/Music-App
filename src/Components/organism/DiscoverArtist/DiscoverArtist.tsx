import { useRef } from 'react'
import Text from '../../atoms/Text/Text'
import DiscoverArsistCard from '../../molecules/DiscoverArtistCard/DiscoverArsistCard'
import DiscoverArtistStyle from './DiscoverArtistStyle'
import { FaAngleLeft } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6'
import { musicArtists } from '../../../helpers/discoverArtist'
import { useGetArtistQuery } from '../../../services/MusicApi'
import { useDispatch } from 'react-redux'
import { clearData, setData } from '../../../services/dataSlice'

interface DiscoverProp {
  title: string
}

const DiscoverArtist = ({title} : DiscoverProp) => {
  const discoverwrapperRef = useRef<any>(null)

  const dispatch = useDispatch()

  const handleSetMusic = (data: any, index: number) => {
    if (data) {
      dispatch(clearData())
    }
    dispatch(setData({ data: data, index: index }))
  }

  const scrollLeft = () => {
    const wrapper = discoverwrapperRef.current
    wrapper.scrollLeft -= 100
  }

  const scrollRight = () => {
    const wrapper = discoverwrapperRef.current
    wrapper.scrollLeft += 100
  }

  const artistData =
    musicArtists &&
    musicArtists?.map((artistName) => {
      const { data } = useGetArtistQuery(artistName)
      return { data }
    })


  return (
    <DiscoverArtistStyle>
      <div className="discover-artist">
        <div className="discover-artist_header">
          <Text className="" value={title} />
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
            {artistData &&
              artistData?.map((artist, i) => {
                if (
                  artist &&
                  artist.data &&
                  artist.data.data &&
                  artist.data.data.length > 0
                )
                  return (
                    <DiscoverArsistCard
                      key={i}
                      onClick={() => handleSetMusic(artist?.data?.data, 0)}
                      artistImg={artist?.data?.data[0]?.artist?.picture_big}
                      title={artist?.data?.data[0]?.artist?.name}
                    />
                  )
              })}
          </div>
        </div>
      </div>
    </DiscoverArtistStyle>
  )
}

export default DiscoverArtist

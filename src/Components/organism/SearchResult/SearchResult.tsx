import SearchResultStyle from './SearchResultStyle'
import SearchResultItem from '../../molecules/SearchResultItem/SearchResultItem'
import Text from '../../atoms/Text/Text'
import { useGetArtistQuery } from '../../../services/MusicApi'
import DiscoverArtist from '../DiscoverArtist/DiscoverArtist'
import { setData, clearData } from '../../../services/dataSlice'
import { useDispatch, useSelector } from 'react-redux'

interface SearchResultProps {
  artistname: string
}

const SearchResult = ({ artistname }: SearchResultProps) => {
  const dispatch = useDispatch()
  const data = useSelector((state: any) => state.musicData.data)
  const { data: artistSong } = useGetArtistQuery(artistname)

  const handleSetMusic = (index: number) => {
    if (data) {
      dispatch(clearData())
    }
    dispatch(setData({ data: artistSong?.data, index }))
  }

  return (
    <SearchResultStyle>
      {artistSong?.data ? (
        <section className="search-result">
          <div className="search-result_header">
            <Text
              className="result-header_text"
              value={'Showing results for'}
            />
            <Text className="result-artist_name" value={artistname} />
          </div>

          <div>
            {artistSong?.data &&
              artistSong?.data.map((song: any, i: number) => {
                return (
                  <SearchResultItem
                    onClick={() => {
                      handleSetMusic(i)
                    }}
                    key={i}
                    songtitle={song.title}
                    album={song.album.title}
                    musicImg={song.album.cover_big}
                    artist={song.artist.name}
                  />
                )
              })}
          </div>
        </section>
      ) : (
        <DiscoverArtist title="Quick search" />
      )}
    </SearchResultStyle>
  )
}

export default SearchResult

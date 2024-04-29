import SearchResultStyle from './SearchResultStyle'
import SearchResultItem from '../../molecules/SearchResultItem/SearchResultItem'
import Text from '../../atoms/Text/Text'
import { useGetArtistQuery } from '../../../services/MusicApi'
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
        <section className="quick-search-container">
          <div>
            <Text className="search-header" value="More of what you may like" />
            <div className="quick-search">
              <button>Elevation worship</button>
              <button>Dua lipa</button>
              <button>Lizzy McAlpine</button>
              <button>Sarz</button>
              <button>wizkid</button>
              <button>gunna</button>
            </div>
          </div>

          <div className="quick-search-container">
            <Text className="search-header" value="#trending" />
            <div className="quick-search">
              <button>{'# '}Thswala bam</button>
              <button>{'# '}kendrick lamar</button>
              <button>{'# '}drake</button>
              <button>{'# '}Tyler icu</button>
              <button>{'# '}Beautiful Things</button>
              <button>{'# '}calling my name</button>
              <button>{'# '}J cole</button>
              <button>{'# '}Houdini</button>
            </div>
          </div>
        </section>
      )}
    </SearchResultStyle>
  )
}

export default SearchResult

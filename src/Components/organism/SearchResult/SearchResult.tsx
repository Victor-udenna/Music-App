import SearchResultStyle from './SearchResultStyle'
import SearchResultItem from '../../molecules/SearchResultItem/SearchResultItem'
import Text from '../../atoms/Text/Text'
import { useGetArtistQuery} from '../../../services/MusicApi'
import DiscoverArtist from '../DiscoverArtist/DiscoverArtist'
useGetArtistQuery

interface SearchResultProps {
  artistname: string
}

const SearchResult = ({ artistname }: SearchResultProps) => {
const { data: artistSong } = useGetArtistQuery(artistname);


  return (
    <SearchResultStyle>
      {artistSong?.data ?  (
            <section className="search-result">
            <div className="search-result_header">
  <Text className='result-header_text' value={'Showing results for'}/>
  <Text className='result-artist_name' value={artistname}/>
            </div>
    
            <div>
              {
                artistSong.data && artistSong.data.map((song: any)=>{
                  return (
                    <SearchResultItem  songtitle={song.title} album={song.album.title}  musicImg={song.album.cover_big} artist={song.artist.name} />
                  )
                })
              }
            </div>
          </section>
      ) : (
        <DiscoverArtist title='Quick search'/>
      )}
    </SearchResultStyle>
  )
}

export default SearchResult

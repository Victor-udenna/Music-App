import SearchResultStyle from './SearchResultStyle'
import artistImg from '../../../assets/images/defaultAvatar.jpg'
import SearchResultItem from '../../molecules/SearchResultItem/SearchResultItem'
import Img from '../../atoms/Image/Img'
import Text from '../../atoms/Text/Text'
import { IoAlbums } from 'react-icons/io5'
import { PiUsersFourFill } from 'react-icons/pi'
import { useGetArtistQuery} from '../../../services/MusicApi'
import DiscoverArtist from '../DiscoverArtist/DiscoverArtist'
useGetArtistQuery

interface SearchResultProps {
  artistname: string
}

const SearchResult = ({ artistname }: SearchResultProps) => {
  // const { data: topArtist, isFetching } = useGetTopArtistQuery('8697922');
  const { data: artistSong } = useGetArtistQuery(artistname);

  console.log(artistSong)


  return (
    <SearchResultStyle>
      {artistSong?.data ?  (
            <section className="search-result">
            <div className="search-result_header">
              <Img className="artist-img" image={artistImg} />
              <Text className="result-artist_name" value={'Ruth b'} />
              <div className="artist-stat">
                <div className="icon-stat">
                  <IoAlbums /> <Text value={'1121'} />
                </div>
                <div className="icon-stat">
                  <PiUsersFourFill /> <Text value={'1121'} />
                </div>
              </div>
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

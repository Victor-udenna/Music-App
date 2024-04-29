import { useState } from 'react'
import SearchResultStyle from './SearchResultStyle'
import SearchResultItem from '../../molecules/SearchResultItem/SearchResultItem'
import Text from '../../atoms/Text/Text'
import { useGetArtistQuery } from '../../../services/MusicApi'
import { setData, clearData } from '../../../services/dataSlice'
import { useDispatch, useSelector } from 'react-redux'


const SearchComponent = () => {
  const [artistName, setArtistName] = useState('')
  const dispatch = useDispatch()
  const data = useSelector((state: any) => state.musicData.data)
  const { data: artistSong } = useGetArtistQuery(artistName)

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  const handleChange = (e: any) => {
    setArtistName(e.target.value)
  }

  const handleSetMusic = (index: number) => {
    if (data) {
      dispatch(clearData())
    }
    dispatch(setData({ data: artistSong?.data, index }))
  }

  const handleButtonClick = (value: string) => {
    setArtistName(value)
  }

  return (
    <SearchResultStyle>
      <div>
        <header className="header">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="What do you want to play ?"
              type="search"
              value={artistName}
              onChange={handleChange}
              required
            />
          </form>
        </header>

        {artistSong?.data ? (
          <section className="search-result">
            <div className="search-result_header">
              <Text
                className="result-header_text"
                value={'Showing results for'}
              />
              <Text className="result-artist_name" value={artistName} />
            </div>

            <div>
              {artistSong?.data.map((song: any, i: number) => {
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
              <Text
                className="search-header"
                value="More of what you may like"
              />
              <div className="quick-search">
                <button onClick={() => handleButtonClick('Elevation worship')}>
                  Elevation worship
                </button>
                <button onClick={() => handleButtonClick('Dua lipa')}>
                  Dua lipa
                </button>
                <button onClick={() => handleButtonClick('Lizzy McAlpine')}>
                  Lizzy McAlpine
                </button>
                <button onClick={() => handleButtonClick('Sarz')}>Sarz</button>
                <button onClick={() => handleButtonClick('wizkid')}>
                  wizkid
                </button>
                <button onClick={() => handleButtonClick('gunna')}>
                  gunna
                </button>
              </div>
            </div>

            <div className="">
              <Text className="search-header" value="#trending" />
              <div className="quick-search">
                <button onClick={() => handleButtonClick('Thswala bam')}>
                  {`# `} Thswala bam
                </button>
                <button onClick={() => handleButtonClick('kendrick lamar')}>
                  {`# `} kendrick lamar
                </button>
                <button onClick={() => handleButtonClick('drake')}>
                  {`# `} drake
                </button>
                <button onClick={() => handleButtonClick('Tyler icu')}>
                  {`# `}Tyler icu
                </button>
                <button onClick={() => handleButtonClick('Beautiful Things')}>
                  {`# `}Beautiful Things
                </button>
                <button onClick={() => handleButtonClick('calling my name')}>
                  {`# `}calling my name
                </button>
                <button onClick={() => handleButtonClick('J cole')}>
                  {`# `} J cole
                </button>
                <button onClick={() => handleButtonClick('Houdini')}>
                  {`# `}Houdini
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </SearchResultStyle>
  )
}

export default SearchComponent

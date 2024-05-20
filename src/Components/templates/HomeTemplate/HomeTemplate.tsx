import HomeTemplateStyle from './HomeTemplateStyle'
import TopArtist from '../../organism/TopArtist/TopArtist'
import DiscoverArtist from '../../organism/DiscoverArtist/DiscoverArtist'

const HomeTemplate = () => {
  
  // throw new Error('Test');

  return (
    <HomeTemplateStyle>
      <TopArtist />
      <DiscoverArtist title="You may also like" />
    </HomeTemplateStyle>
  )
}

export default HomeTemplate

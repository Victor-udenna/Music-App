import HomeTemplateStyle from "./HomeTemplateStyle"
import TopArtist from "../../organism/TopArtist/TopArtist"
import DiscoverArtist from "../../organism/DiscoverArtist/DiscoverArtist"


const HomeTemplate = () => {
  return (
<HomeTemplateStyle>
  <TopArtist/>
  <DiscoverArtist/>
</HomeTemplateStyle>
  )
}

export default HomeTemplate
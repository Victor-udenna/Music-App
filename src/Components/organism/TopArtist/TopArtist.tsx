import { useState, useEffect } from 'react'
import TopArtistStyle from './TopArtistStyle'
import Text from '../../atoms/Text/Text'
import { FaAngleLeft } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6'
import Img from '../../atoms/Image/Img'
import defaultImg from "../../../assets/images/defaultAvatar.jpg"
import MusicCard from '../../molecules/MusicCard/MusicCard'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const TopArtist = () => {

      const [artist, setArtist] = useState<any>({});
  
  const {isLoading,  data} = useQuery({
    queryKey: ['musicData'],
    queryFn: ()=>{
      const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: {q: 'ruth b'},
        headers: {
          'X-RapidAPI-Key': '5312ed048amsh03ba71e9c5ebb31p10336djsnc538ae0495e9-',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };
  
      try {
        const response =  axios.request(options);
        response.then((res)=>{
          console.log(res.data)
        })
        
      } catch (error) {
        console.error(error);
      }
    }
  })


  useEffect(() => {
    const fetchArtist = async () => {
      const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/artist/8697922',
        headers: {
          'X-RapidAPI-Key': '5312ed048amsh03ba71e9c5ebb31p10336djsnc538ae0495e9-',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setArtist(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchArtist();
  }, []);
  

  console.log("dd", data)
  console.log(isLoading)
  console.log(artist)

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
              <Img className="artist-img" image={artist.picture_big ? artist.picture_big : defaultImg} />
              <Text className="artistname" value={artist.name ? artist.name : "loading"} />
            </div>
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
          </div>
        </div>
      </section>
    </TopArtistStyle>
  )
}

export default TopArtist

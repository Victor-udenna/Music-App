import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Sidebar from './Components/organism/Sidebar/Sidebar';
import Home from './Components/pages/Home'
import Search from './Components/pages/Search'
import MainLayout from './Components/templates/MainLayout/MainLayout'

function App() {
  // const [tracks, setTracks] = useState([]);
  // useEffect(() => {
  //   const fetchTracks = async () => {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
  //       params: {q: 'eminem'},
  //       headers: {
  //         'X-RapidAPI-Key': '5312ed048amsh03ba71e9c5ebb31p10336djsnc538ae0495e9',
  //         'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  //       }
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //       setTracks(response.data)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchTracks();
  // }, []);

  // console.node -vlog(tracks)

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App

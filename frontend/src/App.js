import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';
import Videopage from './components/Videopage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LikedVideos from './components/LikedVideos';
import LoginPage from './components/LoginPage';
import Channel from './components/Channel';
import Feedback from './components/Feedback';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/video" element= {<Videopage/>}/>
      <Route path="/likedvideos" element= {<LikedVideos/>}/>
      <Route path="/login" element= {<LoginPage/>}/>
      <Route path="/channels" element= {<Channel/>}/>
      <Route path="/feedback" element= {<Feedback/>}/>
      <Route path="/searched" element= {<SearchPage/>}/>
    </Routes>
    </Router>
  );
}

export default App;

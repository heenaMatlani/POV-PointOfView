import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import Videopage from "./components/Videopage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LikedVideos from "./components/LikedVideos";
import LoginPage from "./components/LoginPage";
import Channel from "./components/Channel";
import Feedback from "./components/Feedback";
import SearchPage from "./components/SearchPage";
import Subscription from "./components/Subscription";
import Payment from "./components/Payment";
import { Elements } from "@stripe/react-stripe-js";
import National from "./explore/National";
import Entertainment from "./explore/Entertainment";
import International from "./explore/International";
import Sports from "./explore/Sports";
import Health from "./explore/Health";
import Business from "./explore/Business";
import Technology from "./explore/Technology";
import About from "./components/About";
import ChannelInfo from "./components/ChannelInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/video/:videoId" element={<Videopage />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/channels" element={<Channel />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/searched" element={<SearchPage />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/national" element={<National/>} />
        <Route path="/entertainment" element={<Entertainment/>} />
        <Route path="/international" element={<International />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/health" element={<Health />} />
        <Route path="/business" element={<Business />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/about" element={<About />}/>
        <Route path="/channels/:channelId" element={<ChannelInfo />}/>
      </Routes>
    </Router>
  );
}

export default App;

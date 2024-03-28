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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51OxouLSGqkoequIlL3eNXirRn8pXldvul43e1JTQPEFjp6AySIlcBPVCPvj8Mjk2cU1X63ux4vLv1hpQwF0XvZO200r0TFZy54");

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
        <Route path="/payment" element={<PaymentWrapper />} />
      </Routes>
    </Router>
  );
}

function PaymentWrapper() {
  return (
    <Elements stripe={promise}>
      <Payment />
    </Elements>
  );
}

export default App;

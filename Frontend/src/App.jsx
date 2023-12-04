import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Signin from "./components/header/signin/Signin";
import Login from "./components/header/login/Login";
import LandingPage from "./components/landingPage/LandingPage";
import AddInfo from "./components/add/addInfo/AddInfo";
import Marketplace from "./components/marketplace/Marketplace";
import Pupilajes from "./components/pupilajes/Pupilajes";
import Profile from "./components/profile/Profile";
import PupilajeAddInfo from "./components/pupilajes/pupilajeAddInfo/PupilajeAddInfo";
import CreateAddMarket from "./components/marketplace/createAddMarket/CreateAddMarket";
import MyAdds from "./components/profile/myAdds/MyAdds";
import MyHospedajes from "./components/profile/myHospedajes/MyHospedajes";
import CreateAddPupilajes from "./components/pupilajes/CreateAddPupilajes/CreateAddPupilajes";
import { UserContextProvider } from "./context/Usercontext";
import Homepage from "./components/homepage/homepage";
import PostDetail from "./components/pupilajes/PostDetail/PostDetail";

function App() {
  return (
    <UserContextProvider>
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AddInfo" element={<AddInfo />} />
            <Route path="/Marketplace" element={<Marketplace />} />
            <Route path="/Pupilajes" element={<Pupilajes />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/PupilajeAddInfo" element={<PupilajeAddInfo />} />
            <Route path="/CreateAddMarket" element={<CreateAddMarket />} />
            <Route path="/CreateAddPupilajes" element={<CreateAddPupilajes />} />
            <Route path="/MyAdds" element={<MyAdds />} />
            <Route path="/MisHospedajes" element={<MyHospedajes />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/post/:postId" element={<PostDetail />} />

          </Routes>
        </BrowserRouter>
      </>
    </UserContextProvider>
  );
}

export default App;

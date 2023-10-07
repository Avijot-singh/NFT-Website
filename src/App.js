import Home from "./pages/Home";
import History from "./pages/history";
import Upload from "./pages/Upload";
import Search from "./pages/Searchpage";
import MyProfile from "./pages/MyProfile";
import Logout from "./pages/Logout"
import SignIn from "./Components/SignIn"; 
import SignUp from "./Components/SignUp"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assets from "./pages/Assets";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/Upload" element={<Upload />} />
        <Route exact path="/Search" element={<Search />} />
        <Route exact path="/Assets" element={<Assets />} /> 
        <Route exact path="/MyProfile" element={<MyProfile />} /> 
        <Route exact path="/Logout" element={<Logout />} />
        <Route exact path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />

      
      </Routes>
    </Router>
  );
}

export default App;
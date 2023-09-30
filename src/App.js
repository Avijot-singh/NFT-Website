import Home from "./pages/Home";
import History from "./pages/history";
import Upload from "./pages/Upload";
import Search from "./pages/Searchpage";
import MyProfile from "./pages/MyProfile";
import React from "./Components/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assets from "./pages/Assets";
import { Login } from "@mui/icons-material";

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
      
      </Routes>
    </Router>
  );
}

export default App;

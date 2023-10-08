import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Dropdown from "../Components/Dropdown";
import "../style/Home.css";
import Assets from "./Assets";
function App() {
  return (
    <>
      <div class="header">
        <div class="navbar">
          <Navbar />
        </div>
        <div class="header-icon">
          <Dropdown />
        </div>
      </div>

      <Banner />
      


      <Categories />
      <Footer />
    </>
  );
}

export default App;
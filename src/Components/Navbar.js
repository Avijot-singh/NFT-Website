import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet, MdShoppingCart } from "react-icons/md";
import { BiAperture } from "react-icons/bi";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import dummyData from "../utils/dummyData"; 


const Navbar = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  const handleSearch = () => {
    const filteredResults = [];

    for (const category in dummyData) {
      const categoryResults = dummyData[category].filter((nft) =>
        nft.description.toLowerCase().includes(searchValue.toLowerCase())
      );
      filteredResults.push(...categoryResults);
    }

    setSearchResults(filteredResults);
  };

  return (
    <div className="header-wrapper">
      <div className="logo-container">
        <div className="logo-text">
          <Link className="special-link" to="/">
            <BiAperture className="logo-image" />
          </Link>
        </div>
      </div>
      {/* <div className="search-bar">
        <div className="search-icon">
          <AiOutlineSearch />
        </div>
        <input
          className="search-input"
          type="text"
          placeholder="Search items, collections, and accounts"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
        {searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((nft) => (
              <Link
                key={nft.id}
                to={`/nft/${nft.id}`}
                className="search-result"
              >
                <img
                  src={nft.image}
                  alt="NFT"
                  className="search-result-image"
                />
                <div className="search-result-description">
                  {truncateDescription(nft.description, 20)}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div> */}
      <div className="header-items">
      <div className="header-item">
          <Link className="special-link" to="/">
            Home
          </Link>
        </div>
        <div className="header-item">
          <Link className="special-link" to="/upload">
            Upload
          </Link>
        </div>
        <div className="header-item">
          <Link className="special-link" to="/Assets">
            Digitalassets
          </Link>
        </div>
        <div className="header-item">
          <Link className="special-link" to="/history">
            History
          </Link>
        </div>
        <div className="header-item">
          <Link className="special-link" to="/Search">
            Search
          </Link> 
        </div>
       
        
        <div className="header-icon">
          <MdOutlineAccountBalanceWallet />
        </div>
        <div className="header-icon">
          <MdShoppingCart />
        </div>
        
        </div>
      </div>
      
   
    
  );
};

export default Navbar;

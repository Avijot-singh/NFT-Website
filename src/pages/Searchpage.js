import React, { useState } from "react";
import Card from "../Components/Card"; 
import Navbar from "../Components/Navbar";
import categoriesData from "../utils/categories";
import Dropdown from "../Components/Dropdown";
import Footer from "../Components/Footer";
import "../style/Home.css";

const SearchPage = () => {
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

    for (const category in categoriesData) {
      const categoryResults = categoriesData[category].filter(
        (nft) => nft.name.toLowerCase().includes(searchValue.toLowerCase()) 
      );

      filteredResults.push(...categoryResults);
    }

    setSearchResults(filteredResults);
  };

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

      <div>
        <h1 className="sName">Search Results</h1>
        <div className="search-bar">
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
        </div>

        <div className="card-container">
          {searchResults.length > 0 ? (
            searchResults.map((nft) => (
              <Card
                key={nft.id}
                image={nft.image}
                name={nft.name}
                description={truncateDescription(nft.description, 20)}
                price={nft.price}
              />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;

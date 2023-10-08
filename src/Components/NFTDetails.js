import React from "react";
import { useParams } from "react-router-dom";
import nftData from "./nftData";

const NFTDetails = () => {
    const { id } = useParams();
    console.log("Retrieved ID from URL:", id);
    const nft = nftData.find(item => item.id.toString() === id);

    if (!nft) {
        return <h1>NFT not found!</h1>;
    }

    return (
    <div>
        <img src={nft.image} alt={nft.name} />
        <h2>{nft.name}</h2>
        <p>{nft.description}</p>
        <p>{nft.price}</p>
    </div>
    );
};

export default NFTDetails;

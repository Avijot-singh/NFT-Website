import React from "react";
import '../style/NFTDetails.css';
import { useParams } from "react-router-dom";
import nftData from "./nftData";

const flattenNftData = (data) => {
    let flatArray = [];
    for (let category in data) {
        flatArray = [...flatArray, ...data[category]];
    }
    return flatArray;
};

const flatNftData = flattenNftData(nftData);

const NFTDetails = () => {

    
    const { id } = useParams();
    const nft = flatNftData.find(item => item.id.toString() === id);
    console.log("Selected NFT:", nft);

    if (!nft) {
        return <h1>NFT not found!</h1>;
    }

    return (
        <div>
             <div id="particles-js"></div>  
            <div className="custom-cursor"></div>  
            <div className="nft-details-container">
                <img src={nft.image} alt={nft.name} />
                <div>
                    <h2>{nft.name}</h2>
                    <p>{nft.description}</p>
                    <p>{nft.price}</p>
                </div>
            </div>
            
            <div className="related-nfts-section">
                <h3>Related NFTs</h3>
                <div className="related-nfts-grid">
                    {flatNftData.filter(item => item.id !== nft.id).map(relatedNft => (
                        <div key={relatedNft.id} className="related-nft">
                            <img src={relatedNft.image} alt={relatedNft.name} />
                            <h4>{relatedNft.name}</h4>
                            <p>{relatedNft.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NFTDetails;

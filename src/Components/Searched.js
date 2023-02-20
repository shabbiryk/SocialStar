import { getUrl, makeCalls } from "../api/api";
import { filterApiResponse } from "../api/utils/helper";
import SearchFeed from "./SearchResult";
import { useState } from "react";
import "./Searched.css"
import { isBit } from "../api/bit";

function SearchFeat() {
    const [searchData, setSearchData] = useState({
        platform: "",
        pubAddress: "",
    });
    const [searchFeed, setSearchFeed] = useState([]);
    const [authorUrii, setAuthorURI] = useState("");
    const [authorData, setAuthorData] = useState({});
    async function checkForBit(usrAddress) {
        if (usrAddress.indexOf(".bit") === -1) {
            return false;
        } else {
            const resolvedAddress = await isBit(usrAddress);
            return resolvedAddress;
        }
    }


    async function handleClickForSearch(e) {
        e.preventDefault();
        console.log(searchData);
        const resolveUsrAddrs = checkForBit(searchData.pubAddress);
        if (resolveUsrAddrs !== false) {
            const url = getUrl(
                "0",
                searchData.platform.toLowerCase(),
                resolveUsrAddrs
            );
            // const url2 = getUrl("1", "", resolveUsrAddrs);
            const response = await makeCalls(url, "GET");
            // const response2 = await makeCalls(url2, "GET");
            // const profileImg = filterApiResponse(response2);
            // setAuthorData(profileImg[0]);
            // setAuthorURI(profileImg[0].profile_uri[0]);
            setSearchFeed(response);
            setSearchData({
                platform: "",
                pubAddress: "",
            });
        } else {
            const url = getUrl(
                "0",
                searchData.platform.toLowerCase(),
                searchData.pubAddress
            );
            const url2 = getUrl("1", "", searchData.pubAddress);
            const response = await makeCalls(url, "GET");
            const response2 = await makeCalls(url2, "GET");
            const profileImg = filterApiResponse(response2);
            setAuthorData(profileImg[0]);
            setAuthorURI(profileImg[0].profile_uri[0]);
            setSearchFeed(response);
            setSearchData({
                platform: "",
                pubAddress: "",
            });
        }
    }
    return (
        <div className="Searched">

            <input
                // style={{width:"40vw",position:"relative" ,left:"200px"}}
                className="searchInput"
                type="text"
                value={searchData.pubAddress}
                placeholder="Type Your Address"
                onChange={(e) =>
                    setSearchData({ ...searchData, pubAddress: e.target.value })
                }
            />

            <select
                className="selectMedia"
                value={searchData.platform}
                onChange={(e) => {
                    setSearchData({ ...searchData, platform: e.target.value });
                }}
            >
                <option>Farcaster</option>
                <option>Lens</option>
                <option>Lenster</option>
                <option>Orb</option>
                <option>Crossbell</option>
                <option>xLog</option>
                <option>EIP-1577</option>
                <option>IQ.Wiki</option>
            </select>
            <button className="searchButton" onClick={handleClickForSearch}>Search</button>
            {searchFeed.length > 0 ? (
                searchFeed.map((singleFeed) => {
                    return (
                        <SearchFeed
                            singleSearchFeed={singleFeed}
                            authorData={authorData}
                            authorUrii={authorUrii}
                        />
                    );
                })
            ) : (
                <p style={{ display: "none", textAlign: "centre", color: "white", margin: "auto", }}>Sorry Information you searched couldn't found</p>
            )}

        </div>
    );
}
export default SearchFeat;
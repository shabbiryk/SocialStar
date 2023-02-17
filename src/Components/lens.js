import { useState, useEffect } from "react";
import { makeCalls } from "../api/api";
import { filterApiResponse } from "../api/utils/helper";
import "./lens.css"

/**
 * This would take care of all the farcaster things for any user. Any user could be vitalik.eth, pubKey etc
 * Any user post and comments with direct urls would be there.
 * It only shows 20 post either comment or actual post
 *
 * For vishal:
 * Style this or copy these code and make it home page
 */

function LensFeed() {
    const [farcasterFeed, setFarcasterFeed] = useState([]);
    const [authorUrii, setAuthorURI] = useState("");
    const [authorData, setAuthorData] = useState({});
    const url =
        "https://api.rss3.io/v1/notes/0x50b6a381993834C623b2Bded6825824C936E48bB?limit=30&tag=social&type=post&include_poap=false&count_only=false&query_status=false";
    const url2 =
        "https://api.rss3.io/v1/profiles/0x50b6a381993834C623b2Bded6825824C936E48bB";
    useEffect(() => {
        async function mydata() {
            const data = await makeCalls(url, "GET");
            const authorUri = await makeCalls(url2, "GET");
            const img = filterApiResponse(authorUri);
            setAuthorData(img[0]);
            setAuthorURI(img[0].profile_uri[0]);
            setFarcasterFeed(data);
        }
        mydata();
    }, []);
    return (
        <div className="farcasFeed">
            {farcasterFeed &&
                farcasterFeed.map((singleFed) => {
                    return (
                        <div className="feeds">
                            <div className="feedImg">
                                <div>
                                    <img src={authorUrii} alt="person face" />
                                    <p>handle: {authorData.name}</p>
                                </div>
                            </div>
                            <div className="network">
                            <p>Network: {singleFed.network}</p>
                            </div>
                            <div className="engagement">
                            <p>Platform: {singleFed.platform}</p>
                            </div>
                            <div className="engagement">
                            <p>Engagement Type: {singleFed.type}</p>
                            </div>
                            <div className="from">
                            <p>from: {singleFed.address_from}</p>
                            </div>
                            <div className="to">
                            <p>to: {singleFed.address_to}</p>
                            </div>
                            <div className="to">
                            <p>
                                comment:{" "}
                                {singleFed.actions && singleFed.actions[0].metadata.body}
                            </p>
                            </div>
                            <div className="flink">
                            <p>
                                Full view:{" "}
                                {singleFed.actions && singleFed.actions[0].related_urls[0]}
                            </p>
                            </div>
                            <div className="time">
                            <p>Time: {singleFed.created_at}</p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
export default LensFeed;

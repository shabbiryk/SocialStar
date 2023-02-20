import { Link } from "@material-ui/core";
import { useState, useEffect } from "react";
import { makeCalls } from "../api/api";
import { filterApiResponse } from "../api/utils/helper";
import "./farcaster.css"

/**
 * This would take care of all the farcaster things for any user. Any user could be vitalik.eth, pubKey etc
 * Any user post and comments with direct urls would be there.
 * It only shows 30 post either comment or actual post
 *
 * For vishal:
 * Style this or copy these code and make it home page
 */


function FarcasterFeed() {
    const [authorUrii, setAuthorURI] = useState("");
    const [authorData, setAuthorData] = useState({});
    const [reply, setReply] = useState();
    const [farcasterFeed, setFarcasterFeed] = useState([]);
    const url =
        "https://api.rss3.io/v1/notes/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045?limit=30&tag=social&platform=farcaster&include_poap=false&count_only=false&query_status=false";
    const url2 =
        "https://api.rss3.io/v1/profiles/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
    useEffect(() => {
        async function mydata() {
            const data = await makeCalls(url, "GET");
            const authorUri = await makeCalls(url2, "GET");
            const img = filterApiResponse(authorUri);
            setAuthorData(img[0]);
            setAuthorURI(img[0].profile_uri[0]);
            setFarcasterFeed(data);
            setFarcasterFeed(data);
        }
        mydata();
    }, []);
    function replyChange() {
        console.log("going to the function");
        const change = document.getElementById("comment");
        change.style.display = "inline";
    }
    return (
        <div className="farcasFeed">
            {farcasterFeed &&
                farcasterFeed.map((singleFed) => {
                    return (
                        <>
                            <div className="feeds">
                                <div className="feedImg">
                                    <div>
                                    <img src={authorUrii} alt="person pfp" />
                                    <p id="handle">Handle: {authorData.name}</p>
                                    </div>
                                </div>

                                <div className="network">
                                    <p>Network: {singleFed.network}</p>
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
                                        Full View :
                                    </p>
                                    <a href={singleFed.actions && singleFed.actions[0].related_urls[0]} target="_blank" rel="noreferrer" >

                                        {singleFed.actions && singleFed.actions[0].related_urls[0]}
                                    </a>
                                    {/* <div className="reply">
                                        <input type="text" placeholder="Reply" id="comment" />
                                        <button onClick={replyChange} className="btn" id="btn">reply</button>
                                    </div> */}
                                </div>

                                <div className="time">
                                    <p>Time: {singleFed.created_at}</p>
                                </div>
                            </div>
                        </>
                    );
                })}
        </div>
    );
}
export default FarcasterFeed;
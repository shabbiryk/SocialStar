import { useState, useEffect } from "react";
import { makeCalls } from "../api/api";
import { filterApiResponse } from "../api/utils/helper";

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
        <>
            {farcasterFeed &&
                farcasterFeed.map((singleFed) => {
                    return (
                        <div>
                            <img src={authorUrii} alt="person face" />
                            <p>handle: {authorData.name}</p>
                            <p>Network: {singleFed.network}</p>
                            <p>Platform: {singleFed.platform}</p>
                            <p>Engagement Type: {singleFed.type}</p>
                            <p>from: {singleFed.address_from}</p>
                            <p>to: {singleFed.address_to}</p>
                            <p>
                                comment:{" "}
                                {singleFed.actions && singleFed.actions[0].metadata.body}
                            </p>
                            <p>
                                Full view:{" "}
                                {singleFed.actions && singleFed.actions[0].related_urls[0]}
                            </p>
                            <p>Time: {singleFed.created_at}</p>
                        </div>
                    );
                })}
        </>
    );
}
export default LensFeed;
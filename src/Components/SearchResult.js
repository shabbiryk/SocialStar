import "./lens.css"; // uncomment this and make changes also


function SearchFeed({ singleSearchFeed, authorData, authorUrii }) {
    return (
        <div style={{ color: "white", marginTop: "200px", right: "200px" }} className="feeds">
            <div className="feedImg">
                <div>
                    <img src={authorUrii} alt="person face" />
                    <p>handle: {authorData.name}</p>
                </div>
            </div>
            <div className="network">
                <p>Network: {singleSearchFeed.network}</p>
            </div>
            <div className="engagement">
                <p>Platform: {singleSearchFeed.platform}</p>
            </div>
            <div className="engagement">
                <p>Engagement Type: {singleSearchFeed.type}</p>
            </div>
            <div className="from">
                <p>from: {singleSearchFeed.address_from}</p>
            </div>
            <div className="to">
                <p>to: {singleSearchFeed.address_to}</p>
            </div>
            <div className="to">
                <p>
                    comment:{" "}
                    {singleSearchFeed.actions &&
                        singleSearchFeed.actions[0].metadata.body}
                </p>
            </div>
            <div className="flink">
                <p>
                    Full view:{" "}
                    {singleSearchFeed.actions &&
                        singleSearchFeed.actions[0].related_urls[0]}
                </p>
            </div>
            <div className="time">
                <p>Time: {singleSearchFeed.created_at}</p>
            </div>
        </div>
    );
}
export default SearchFeed;
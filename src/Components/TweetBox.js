import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar } from "@material-ui/core"
import db from "../firebase"

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Mark Mark",
            username: "Markkkk",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://www.pngfind.com/pngs/m/14-141135_download-mark-zuckerberg-png-image-mark-zuckerberg-transparent.png"
        });

        setTweetMessage("");
        setTweetImage("")
    }

    return (
        <div className='tweetBox'>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="tweetBox__input">
                    <Avatar src="https://www.pngfind.com/pngs/m/14-141135_download-mark-zuckerberg-png-image-mark-zuckerberg-transparent.png" />
                    <textarea
                        onChange={e => setTweetMessage(e.target.value)}
                        className="input_post"
                        value={tweetMessage} placeholder="What's happening?" type="text" />

                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text" />
                <button
                    onClick={sendTweet}
                    type="submit"
                    className="post_Button">Post</button>
            </form>
        </div>
    )
}

export default TweetBox

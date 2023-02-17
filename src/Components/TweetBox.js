import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar } from "@material-ui/core"
import db from "../firebase"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import SwapVertIcon from '@material-ui/icons/SwapVert';

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
        <div className='postContent'>


            <div className='tweetBox'>
                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="tweetBox__input">
                        <Avatar style={{ marginTop: "18px" }} src="https://www.pngfind.com/pngs/m/14-141135_download-mark-zuckerberg-png-image-mark-zuckerberg-transparent.png" />
                        <input
                            onChange={e => setTweetMessage(e.target.value)}
                            className="input_post"
                            value={tweetMessage} placeholder="What's happening?" type="text" />

                    </div>

                    <button
                        onClick={sendTweet}
                        type="submit"
                        className="post_Button">Post</button>
                </form>

            </div>

            {/* <div className='postbox' >
                <div className='post'>
                    <h2> This is the post data that i want to test in the front end</h2>
                        <div className="postIcon" >
                        <FavoriteBorderIcon />
                        <ShareIcon />
                        <SwapVertIcon />
                        </div>
                </div>
                <div className='post'>
                    <h2> This is the post data that i want to test in the front end</h2>
                        <div className="postIcon" >
                        <FavoriteBorderIcon />
                        <ShareIcon />
                        <SwapVertIcon />
                        </div>
                </div>
                <div className='post'>
                    <h2> This is the post data that i want to test in the front end</h2>
                        <div className="postIcon" >
                        <FavoriteBorderIcon />
                        <ShareIcon />
                        <SwapVertIcon />
                        </div>
                </div>
                <div className='post'>
                    <h2> This is the post data that i want to test in the front end</h2>
                        <div className="postIcon" >
                        <FavoriteBorderIcon />
                        <ShareIcon />
                        <SwapVertIcon />
                        </div>
                </div>
                   
            </div> */}

            <div>

            </div>
        </div>
    )
}

export default TweetBox

import React, { useEffect, useState } from 'react'
import "./Feed.css"
import TweetBox from "./TweetBox"

// import db from "../firebase"
import FarcasterFeed from './farcaster';
import LensFeed from './lens';


function Feed() {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     db.collection('posts').onSnapshot(snapshot => (
    //         setPosts(snapshot.docs.map(doc => doc.data()))
    //     ))
    // }, [])


    return (
        <div className='home'>
            <div className='feed'>
                <TweetBox />
            </div>
            <div>
                 <FarcasterFeed />
            </div>
            <div>
                <LensFeed/>
            </div>
        </div>
    )
}

export default Feed

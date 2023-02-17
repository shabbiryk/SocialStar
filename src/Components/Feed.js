import React, { useEffect, useState } from 'react'
import "./Feed.css"
import TweetBox from "./TweetBox"

import db from "../firebase"


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])


    return (
        <div className='feed'>
            <TweetBox />
        </div>
    )
}

export default Feed

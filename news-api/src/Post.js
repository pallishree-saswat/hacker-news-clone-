import React from 'react'
import TimeAgo from 'timeago-react';

const Post = ({posts}) => {

    const url = "https://hacker-news.firebaseio.com/v0/newstories.json";
const vkey = 0;
    if(posts.length === 0) {

        return <div>Loading...</div>;
      }
    
      return (
      <div className="news">
        
          <h4>Latest {posts.length} hacker news stories</h4>
         
            {posts.map((post, key) => (
               <card key={key} style={{marginTop :"20px"}}>
                 <a href={post.url} target="_blank">{post.title}</a>
                 <div className="sub">
                 {post.score} points 
                 by {post.by}  
                &#160; <TimeAgo timestamp={post.time} locale='en_EN' /> ago 
                 | {post.descendants} comments</div>
         
               </card>
            ))}
           
      </div>
    
      )
}

export default Post

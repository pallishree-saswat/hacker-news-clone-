import React from 'react'
import TimeAgo from 'timeago-react';

const Home = ({posts}) => {


        if(posts.length === 0) {
    
            return <div>Loading...</div>;
          }
        
    return (
        <>
        {posts.map((post, key) => (
        <table class="table table-hover">
     
           <tbody>
          <tr class="table-primary">
           
            <td>
                
            <a href={post.url} target="_blank">{post.title}</a>
                 <div className="sub">
                 {post.score} points 
                 by {post.by}  
                &#160; <TimeAgo timestamp={post.time} locale='en_EN' /> ago 
                 | {post.descendants} comments</div>
            
            
            </td>
           
          </tr>
      
        
     
       
       
        </tbody>
      </table>
        ))}
        </>
    )
}

export default Home

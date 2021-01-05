import React from 'react'
import Post from './Post'
import Home from './Home'
import TimeAgo from 'timeago-react';

const Api = () => {
 const url = "https://hacker-news.firebaseio.com/v0/newstories.json";

 const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
  
   
        getTop20News();
    }, []);

    const getTop20News = async function() {
  
        try {
  
          const res = await fetch(url);
       
          if(res.ok === false ) {
  
            throw new Error("response Error:" + res.text);
          }
  
          const result = await res.json();
    
          const promises = result
                            .slice(0, 20)
                            .map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
  
                              res => res.json()
                            )
                          );
      
        const res1 = await Promise.all(promises);
         console.log(res1)
        setPosts(res1);
  
        } catch (err) {
  
          console.error(err);
        }
      }
  
    return (
      <div className="api">
     {/* <Post posts={posts} /> */}
        <Home posts={posts} />
      </div>
    )
}

export default Api

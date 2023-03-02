import Post from './Post'
import { useEffect, useState } from 'react'
import {BASE_URL} from '../helper.js'

export default function IndexPage(){
    const [posts, setPosts] = useState([]);
    const url = JSON.parse(JSON.stringify(BASE_URL)) + '/post';

    useEffect(() =>{
        fetch(url).then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);

  return (
    <div>
        {posts.length > 0 && posts.map(post => (
            <Post {...post} />
        ))};
        
    </div>
  );
}

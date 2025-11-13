import { useState, useEffect } from "react";
import axios from "axios";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {posts.map(p => <li key={p.id}><b>{p.title}</b></li>)}
      </ul>
    </div>
  );
}

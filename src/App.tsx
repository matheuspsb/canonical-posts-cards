import { useState, useEffect } from 'react';
import { Card } from './components/Card';
import { fetchPosts } from './utils/index';
import { formatDate } from './utils/index'
import { PostProps } from './types';

function App() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div className="row" style={{marginTop: '20px'}}>
        {posts.map((post) => (
          <Card 
            key={post.id} 
            title={post.title.rendered} 
            image={post.featured_media}
            author={post._embedded.author[0]?.name}
            date={formatDate(post.date)}
            type={post._embedded['wp:term'][0][0].name}
          />
        ))}
      </div>   
  );
}

export default App;
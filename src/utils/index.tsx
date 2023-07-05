import { format } from 'date-fns';
import axios from 'axios';
import { PostProps } from '../types';
  

export const formatDate = (mask: string) => {
    const formattedDate = format(new Date(mask), 'dd MMMM yyyy');
    return formattedDate;
};

export async function fetchPosts(): Promise<PostProps[]> {
    try {
      const response = await axios.get<PostProps[]>(
        'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json'
      );
      return response.data.map((post) => ({
        id: post.id,
        date: post.date,
        title: post.title,
        _embedded: post._embedded,
        featured_media: post.featured_media,
      }));
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
}
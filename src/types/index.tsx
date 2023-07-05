export interface CardProps {
    title: string;
    author: string;
    image: string;
    date: string;
    type: string;
}

export interface PostProps {
    id: number;
    date: string;
    title: {
      rendered: string;
    };
    _embedded: {
      author: Author[],
      ['wp:term']: Type[][],
    },
    featured_media: string;
}
  
interface Author {
    id: number;
    name: string;
}
  
interface Type{
    id: number;
    name: string;
}
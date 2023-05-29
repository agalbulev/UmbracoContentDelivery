import MainPage from '../../components/pages/MainPage';
import { Metadata } from 'next';

const getData = async (path: string) => {
    const res = await fetch(`${process.env.API_URL}/content/item/${path}`, { 
      headers: {
        'Accept-Language': ''
      },
      next: { tags: ['umbraco'] }
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
}

export async function generateMetadata({ params }: PropsType): Promise<Metadata> { 
  // fetch data
  const { properties } = await getData(params.path.join("/"));
 
  return {
    title: properties.title,
  };
}

interface PropsType {
  params: { [key: string]: string[] };
}

const HomePage = async ({ params }: PropsType) => {
    const data = await getData(params.path.join("/"));
    return <MainPage {...data} />
}

export default HomePage;
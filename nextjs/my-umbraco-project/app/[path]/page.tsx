import { Metadata } from 'next';

const getData = async (path: string) => {
    const res = await fetch(`http://localhost:19938/umbraco/delivery/api/v1/content/item/${path}`, {cache: 'no-store'});
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
  const { properties } = await getData(params.path);
 
  return {
    title: properties.title,
  };
}

interface PropsType {
  params: { [key: string]: string };
}

const HomePage = async ({ params }: PropsType) => {
    const { properties } = await getData(params.path);
    return <h1>{properties.title}</h1>
}

export default HomePage;
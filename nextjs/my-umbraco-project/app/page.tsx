import MainPage from '@/components/pages/MainPage';
import { Metadata } from 'next';
import Link from 'next/link';

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/content/item/`, { next: { tags: ['umbraco'] } });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const { properties } = await getData();

  return {
    title: properties.title,
  };
}

const HomePage = async () => {
  const data = await getData();
  return <div>
    <MainPage {...data} />
    <Link href="content">Content</Link>
  </div>;
}

export default HomePage;
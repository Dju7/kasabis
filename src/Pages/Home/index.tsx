import Lodgings from '../../Datas/logements.json';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner';
import Card from '../../Components/Card';

export const loader = async () => {
  return Lodgings;
};
interface Lodging {
    id: string;
    cover: string;
    title: string;
  }
  
  function Home() {
    const lodgings = useLoaderData() as Lodging [];
  console.log(lodgings);
  return (
    <div>
      <Banner />
      <section className='mt-10 mb-7 grid grid-cols-3 gap-2 rounded-3xl bg-gray-100'>
        {lodgings.map((lodging:Lodging) => (
          <div key={lodging.id} className='my-6 mx-9'>
            <Link to={`/logements/${lodging.id}`}>
              <Card cover={lodging.cover} title={lodging.title} />
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
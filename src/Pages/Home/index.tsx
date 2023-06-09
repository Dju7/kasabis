import Banner from '../../Components/Banner';
import { Link, useLoaderData } from 'react-router-dom';
import Card from '../../Components/Card';


interface Lodging {
    _id: string;
    id: string;
    cover: string;
    title: string;
  }
  
  function Home() {
    const lodgings = useLoaderData() as Lodging[];
    if (!lodgings){
      return (
        <div>
      <Banner />
      <section className='mt-10'>
        <h1 className='text-3xl text-primary'>Site en maintenance, veuillez revenir plus tard SVP...</h1>
      </section>
    </div>
      )
    }
  return (
    <div>
      <Banner />
      <section className='mt-10 mb-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 rounded-3xl bg-gray-100 shadow-xl'>
        {lodgings.map((lodging:Lodging) => (
          <div key={lodging.id} className='my-6 mx-9'>
            <Link to={`/logements/${lodging._id}`}>
              <Card cover={lodging.cover} title={lodging.title} />
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
import lodgings from '../../Datas/logements.json'
import { useLoaderData } from 'react-router-dom';
import Caroussel from '../../Components/Carroussel'
import Tag from '../../Components/Tag'
import Host from '../../Components/Host'
import Star from '../../Components/Star';



type MyParams = {
    params: any;
  };

  export type Lodging = {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: {
      name: string;
      picture: string;
    };
    rating: string;
    location: string;
    equipments: string[];
    tags: string[];
  };

 
export const loader = async ({ params }: MyParams) => {
    const { id } = await params;
    const lodging = lodgings.find((lodging) => lodging.id === id);
    if (!lodging) {
      throw new Error('le logement est introuvable');
    }
    return lodging
  };
  


 function Logements () {
  const lodging =  useLoaderData() as Lodging;
  console.log({lodging})
  return (
  <main>
    <section >
        <Caroussel pictures={lodging.pictures} />
    </section>
    <section className='flex flex-col my-4'>
        <div className='text-primary m-0'>
          <h1 className='font-semibold m-0'>{lodging.title}</h1>
          <p className='mt-3'>{lodging.location}</p>
          <div className='flex flex-row gap-2 mt-2'>
            {lodging.tags.map((tag, index) => {
              return (
                <Tag key={index} tag={tag}>
                  <p>{tag}</p>
                </Tag>
              );
            })}
          </div>
        </div>
        <div className='flex flex-row justify-between items-center'>
          <div className='mt-4'>
            <Star rating={lodging.rating} />
          </div>
          <div>
            <Host name={lodging.host.name} picture={lodging.host.picture} />
          </div>
        </div>
    </section>
  </main>
  )
}

export default Logements
import lodgings from '../../Datas/logements.json'
import { useLoaderData } from 'react-router-dom';


type MyParams = {
    params: any;
  };

  type Lodging = {
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
    return {lodging}
  };
  


 function Logements () {
    const { lodging }: {lodging: Lodging} =  useLoaderData() ;
    console.log({lodging})
   return (
       <div>
           <h1>{lodging.title}</h1>
       </div>
    )
}

export default Logements
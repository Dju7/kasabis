import { LoaderFunction } from 'react-router-dom';
import Lodgings from '../Datas/logements.json'

export const loader: LoaderFunction = async () => {
    return Lodgings;
    
  };

  export const loaderId: LoaderFunction = async ({ params }) => {
    const { id } = params;
    const lodging = Lodgings.find((lodging) => lodging.id === id);
    if (!lodging) {
      throw new Error('le logement est introuvable');
    }
    return lodging
  };
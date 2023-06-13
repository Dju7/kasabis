import { LoaderFunction } from 'react-router-dom';
import axios from 'axios';
import {Lodging} from '../Type/Lodging'

  // Requête API 

   export const loader: LoaderFunction = async () => {
    let Lodgings = null
     try {
       const response = await axios.get('http://localhost:3000/api/lodging');
      Lodgings = response.data;
     } catch (error) {
       console.error('Erreur lors de la récupération des logements:', error);
     }
     return Lodgings
   };


   export const loaderId: LoaderFunction = async ({ params }) => {
    const { id } = params;
  
    try {
      const response = await axios.get(`http://localhost:3000/api/lodging`);
      const lodgings = response.data;
      const lodging = lodgings.find((lodging:Lodging) => lodging._id === id);
      if (!lodging) {
        throw new Error('Le logement est introuvable');
      }
      
      return lodging;
    } catch (error) {
      console.error('Erreur lors de la récupération du logement:', error);
      throw new Error('Le logement est introuvable');
    }
  };
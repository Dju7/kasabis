import lodgings from '../../Datas/logements.json'
import { useLoaderData } from 'react-router-dom';


type MyParams = {
    params: any;
  };


export const loader = async ({ params }: MyParams) => {
    const { id } = params;
    const lodging = lodgings.find((lodging) => lodging.id === id);
    return lodging || null;
  };


function Logements () {
    const lodging = useLoaderData() as ReturnType<typeof loader>;
    console.log(lodging);
    return (
        <div>
            <h1>Logement</h1>
        </div>
    )
}

export default Logements
import { Link } from 'react-router-dom'

function Error () {
    return (
    <div className='flex flex-col items-center gap-5'>
    <p className='text-[12rem] text-primary mt-36'>404</p>
    <p className='text-lg text-primary text-xl mb-12'>
      Oups ! La page que vous demandez n'existe pas.
    </p>
    <Link to="/" className='text-primary'>
      Retourner sur la page d’accueil
    </Link>
  </div>
    )
}

export default Error;

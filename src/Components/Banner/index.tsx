import img from '../../assets/banner.png'

function Banner() {
    return (
        <section>
           <div className="flex h-52 relative shadow-xl">
            <img src={img} alt='bannière' className='bg-center bg-cover object-cover rounded-xl w-full h-full z-0 ' />
            <p className=" absolute top-20 left-2 lg:inset-x-1/3 text-3xl text-white z-10 ">
            Chez vous, partout et ailleurs
            </p>
           </div>
        </section>
    );
}

export default Banner;
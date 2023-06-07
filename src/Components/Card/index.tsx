import React from 'react';

interface CardProps {
  cover: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ cover, title }) => {
  return (
    <article className='w-fit relative h-[223px] rounded-s-3xl hover:scale-105 ease-in-out- duration-200 my-4'>
      <img src={cover} alt="interieur piole" className="w-full h-full object-cover bg-cover bg-center rounded-xl " />
      <div className='absolute z-10 rounded-xl w-full h-full bottom-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black/50'>
        <p className=' absolute text-white text-lg bottom-4 left-2'>{title}</p>
      </div>
    </article>
  );
}

export default Card;
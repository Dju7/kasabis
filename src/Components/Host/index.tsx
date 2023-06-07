interface HostProps {
    name: string;
    picture: string;
  }
  
  function Host({ name, picture }: HostProps) {
    return (
      <div className="flex flex-row justify-between mt-2 items-center w-[110px] h-4">
        <div className="text-primary font-medium text-xs text-center w-[70px]">
          <p>{name}</p>
        </div>
        <div className="rounded-full w-8 h-8">
          <img src={picture} alt="hôte" className="object-cover object-center rounded-full h-full w-full"/>
        </div>
      </div>
    );
  }
  
  export default Host;
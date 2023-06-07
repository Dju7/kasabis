interface HostProps {
    name: string;
    picture: string;
  }
  
  function Host({ name, picture }: HostProps) {
    return (
      <div className="flex flex-row justify-between mt-2 items-center w-[170px] h-5">
        <div className="text-primary font-medium text-xs text-center w-[100px]">
          <p className="text-[14px] p-2">{name}</p>
        </div>
        <div className="rounded-full w-16 h-16">
          <img src={picture} alt="hôte" className="object-cover object-center rounded-full h-full w-full"/>
        </div>
      </div>
    );
  }
  
  export default Host;
import { PropsWithChildren } from "react";

interface TagProps extends PropsWithChildren {
    tag: string;
  }
  
  function Tag({ tag }: TagProps) {
    return (
      <div className= 'w-[115px] h-6 rounded-[10px] bg-primary'>
        <p className="text-white text-center mt-1.5 text-xs whitespace-nowrap">{tag}</p>
      </div>
    );
  }
  
  export default Tag;
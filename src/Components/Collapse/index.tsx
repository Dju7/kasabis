import arrow from "../../assets/arrow.png";
import { useState, PropsWithChildren } from "react";


interface CollapseProps extends PropsWithChildren {
  title: string;
}

function Collapse({ title, children }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col  mb-5">
      <div className="flex flex-row justify-between w-full h-[47px] rounded-[5px] bg-primary" onClick={() => setIsOpen(!isOpen)}>
        <p className="text-white text-lg m-3">{title}</p>
        <img
          src={arrow}
          className={isOpen ? "m-4 w-5 h-3 ease-in-out duration-300" : "m-4 w-5 h-3 rotate-180 ease-in-out duration-300"}
          alt="fléche directionnelle"
        />
      </div>
      <div
        className={`${"grid grid-rows-[0fr] overflow-hidden text-lg bg-slate-50 text-primary pl-2 pt-1"} ${
          isOpen ? "grid-rows-[1fr] ease-in-out duration-300" : "grid-rows-[0fr] ease-in-out duration-300"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
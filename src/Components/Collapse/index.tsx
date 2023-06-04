import arrow from "../../assets/arrow.png";
import { useState } from "react";

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

function Collapse({ title, children }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col  mb-5">
      <div className="flex flex-row justify-between w-full h-[47px] rounded-[5px] bg-primary" onClick={() => setIsOpen(!isOpen)}>
        <p className="text-white text-sm m-4">{title}</p>
        <img
          src={arrow}
          className={isOpen ? "m-4 w-5 h-3 ease-in-out duration-300" : "m-4 w-5 h-3 rotate-180 ease-in-out duration-300"}
          alt="fléche directionnelle"
        />
      </div>
      <div
        className={`${" grid grid-rows-0 overflow-hidden text-lg bg-slate-50 pl-2"} ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
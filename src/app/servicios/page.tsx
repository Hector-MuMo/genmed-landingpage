import React from "react";
import { oregano } from "../ui/font";
import AccordionItems from "../ui/accordionTreatments";

const Servicios = () => {
  return (
    <div className="bg-[url(../../public/Heroimg-services.png)] bg-cover bg-no-repeat sm:bg-none min-h-dvh p-2 pb-2">
      <main>
        <div className="sm:hidden">
          <h1 className={`${oregano.className} mb-20 text-6xl text-amber-50`}>
            Servicios
          </h1>
          <AccordionItems />
        </div>
        <div className="relative hidden sm:flex">
          <div className="sm: sticky sm:top-0 sm:bg-[url(../../public/Heroimg-services.png)] sm:bg-cover sm:w-1/2 sm:h-svh lg:w-[800px]"></div>
          <div className="sm:w-1/2">
            <h1
              className={`${oregano.className} mb-20 text-6xl text-stone-800 text-center`}
            >
              Servicios
            </h1>
            <div className="">
              <AccordionItems />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Servicios;

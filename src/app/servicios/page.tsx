import React from "react";
import { oregano } from "../ui/font";
import AccordionItems from "../ui/accordionTreatments";

const Servicios = () => {
  return (
    <div className="bg-[url(../../public/Heroimg-services.png)] bg-cover sm:bg-none min-h-dvh p-2 pb-2">
      <main>
        <h1 className={`${oregano.className} mb-20 text-6xl text-amber-50`}>
          Servicios
        </h1>
        <div>
          <AccordionItems/>
        </div>
      </main>
    </div>
  );
};

export default Servicios;

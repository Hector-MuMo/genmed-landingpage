import React from "react";
import { oregano } from "../ui/font";
import AccordionItems from "../ui/accordionTreatments";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros"
};

const Servicios = () => {
  return (
    <div className="bg-[url(../../public/Heroimg-services.png)] bg-cover bg-no-repeat sm:bg-none h-[calc(100vh-4rem)] p-2 pb-2 overflow-auto">
      <main className="h-full">
        <div className="sm:hidden">
          <h1 className={`${oregano.className} mb-20 text-6xl text-amber-50`}>
            Servicios
          </h1>
          <AccordionItems />
        </div>
        <div className="hidden sm:flex h-full">
          <div className="sm:top-0 sm:bg-[url(../../public/Heroimg-services.png)] sm:bg-cover sm:w-1/2 lg:w-[800px]"></div>
          <div className="sm:w-1/2 sm:overflow-auto">
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

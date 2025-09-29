import React from "react";
import { oregano } from "../ui/font";
//import { fetchReviews } from "../utils/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros"
};

const Nosotros = async () => {
  //const reviews = await fetchReviews();
  
  return (
    <div className="bg-[url(../../public/Heroimg-us.png)] bg-cover sm:bg-none h-[calc(100vh-4rem)] p-2 pb-2">
      <main className="h-full">
        <div className="sm:hidden">
          <h1
            className={`${oregano.className} text-6xl text-amber-50 sm:text-stone-800`}
          >
            Nosotros
          </h1>
          <div className="bg-white/70 rounded-lg mt-15 py-5 px-3">
            <h2 className="mb-8 text-2xl text-center text-stone-600">
              Más de [X] Años Creando Sonrisas
            </h2>
            <p className="text-stone-900 text-justify">
              Lorem ipsum dolor sit amet consectetur. Gravida nunc in porttitor
              ut mauris elit nibh. Netus viverra adipiscing mus dui. Luctus eget
              mauris gravida nibh elementum risus. Nunc bibendum eu potenti
              iaculis duis amet nunc. Natoque euismod ullamcorper sit aliquet
              mauris. Hendrerit mauris scelerisque risus eget. Viverra ut
              egestas dictum aliquet laoreet pulvinar nunc ultrices dictum.
              Lobortis lorem et vitae lobortis tortor fermentum eget eu. Natoque
              aenean aliquam enim orci tincidunt id habitasse id ut. Tempor
              porta leo fusce viverra tortor tristique integer ultricies nisl.
              Eleifend amet euismod cursus quis ut nisi egestas.
            </p>
          </div>
        </div>
        <div className="hidden h-full sm:grid sm:grid-cols-3">
          <div className="flex justify-center items-center">
            <h2 className="mb-8 sm:text-4xl lg:text-5xl text-center text-stone-600 sm:px-5">
              Más de [X] Años Creando Sonrisas
            </h2>
          </div>
          <div className="sm:bg-[url(../../public/Heroimg-us.png)] sm:bg-cover bg-center">
            <h1
              className={`${oregano.className} text-6xl text-amber-50 sm:text-stone-800 text-center`}
            >
              Nosotros
            </h1>
          </div>
          <div className="sm:flex sm:justify-center sm:items-center sm:text-md sm:px-5">
            <p className="text-stone-900 text-justify">
              Lorem ipsum dolor sit amet consectetur. Gravida nunc in porttitor
              ut mauris elit nibh. Netus viverra adipiscing mus dui. Luctus eget
              mauris gravida nibh elementum risus. Nunc bibendum eu potenti
              iaculis duis amet nunc. Natoque euismod ullamcorper sit aliquet
              mauris. Hendrerit mauris scelerisque risus eget. Viverra ut
              egestas dictum aliquet laoreet pulvinar nunc ultrices dictum.
              Lobortis lorem et vitae lobortis tortor fermentum eget eu. Natoque
              aenean aliquam enim orci tincidunt id habitasse id ut. Tempor
              porta leo fusce viverra tortor tristique integer ultricies nisl.
              Eleifend amet euismod cursus quis ut nisi egestas.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Nosotros;

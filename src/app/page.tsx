import { Button } from "@heroui/button";

import { oregano } from "./ui/font";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url(../../public/Heroimg-home.png)] bg-cover sm:bg-none min-h-dvh p-2 pb-2">
      <main className="sm:flex sm:flex-col sm:justify-center sm:items-center">
        <div className="sm:flex">
          <div className="sm:w-1/2 sm:h-svh sm:flex sm:flex-col sm:items-center sm:justify-center">
          <h1 className={`${oregano.className} text-6xl text-amber-50 sm:text-stone-400 sm:text-center`}>
            Odontología <span className="text-stone-600 sm:text-stone-900">de Primera</span> para
            toda la Familia.
          </h1>
          <div className="flex justify-center items-center py-5">
            <Button
              as={Link}
              href="/nosotros"
              variant="solid"
              className="px-8 py-6 bg-green-500 text-amber-50 text-2xl "
            >
              Conocenos
            </Button>
          </div>
          </div>
          <div className="sm:bg-[url(../../public/Heroimg-home.png)] sm:bg-cover sm:bg-no-repeat bg-center sm:w-1/2 sm:h-svh lg:w-[800px]"></div>
        </div>
        <p className="bg-white/30 rounded-lg max-w-1/2 text-amber-50 text-lg text-center sm:text-stone-400">
          Transformamos sonrisas y mejoramos tu{" "}
          <span className="text-stone-600 font-bold sm:text-stone-900">salud</span> bucodental con los más
          altos estándares <span className="text-stone-600 font-bold sm:text-stone-900">de calidad</span>.
        </p>
      </main>
    </div>
  );
}

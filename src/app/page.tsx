import { Button } from "@heroui/button";

import { oregano } from "./ui/font";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url(../../public/Heroimg-home.png)] bg-cover sm:bg-none min-h-dvh p-2 pb-2">
      <main>
        <div>
          <h1 className={`${oregano.className} text-6xl text-amber-50`}>
            Odontología <span className="text-stone-600">de Primera</span> para
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
        <div className="h-96"></div>
        <p className="bg-white/30 rounded-lg text-amber-50 text-lg text-center">
          Transformamos sonrisas y mejoramos tu{" "}
          <span className="text-stone-600">salud</span> bucodental con los más
          altos estándares de <span className="text-stone-600">calidad</span>.
        </p>
      </main>
    </div>
  );
}

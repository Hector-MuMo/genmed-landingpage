import { Button } from "@heroui/button";
import { oregano } from "./ui/font";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="bg-[url(../../public/Heroimg-home.png)] bg-cover sm:bg-none h-[calc(100vh-4rem)] p-2 pb-2 sm:p-0">
      <main className="sm:flex sm:flex-col sm:justify-center sm:items-center h-full">
        <div className="sm:flex h-full">
          <div className="sm:w-1/2 sm:flex sm:flex-col sm:items-center sm:justify-center">
            <h1
              className={`${oregano.className} text-6xl text-amber-50 sm:text-stone-400 sm:text-center`}
            >
              Odontología{" "}
              <span className="text-stone-600 sm:text-stone-900">
                de Primera
              </span>{" "}
              para toda la Familia.
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
            <div className="mt-5 flex justify-center">
              <p className="p-3 bg-black/50 rounded-lg max-w-3/4 text-amber-50 text-lg text-center sm:text-stone-400 sm:bg-white">
                Transformamos sonrisas y mejoramos tu{" "}
                <span className="text-green-500 font-bold">salud</span>{" "}
                bucodental con los más altos estándares{" "}
                <span className="text-green-500 font-bold">de calidad</span>.
              </p>
            </div>
          </div>
          <div className="sm:bg-[url(../../public/Heroimg-home.png)] sm:bg-cover sm:bg-no-repeat bg-center sm:w-1/2 lg:w-[800px]"></div>
        </div>
      </main>
    </div>
  );
}

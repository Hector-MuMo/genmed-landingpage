import React from "react";
import { oregano } from "../ui/font";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import Image from "next/image";
import pencil from "../../../public/pencil.png";
import phone from "../../../public/telephone.png";
import whatsapp from "../../../public/whatsapp.png";
import facebook from "../../../public/facebook.png";
import instagram from "../../../public/instagram.png";

const Contacto = () => {
  return (
    <div className="bg-[url(../../public/Heroimg-contact.png)] bg-cover sm:bg-none min-h-dvh p-2 pb-2">
      <main>
        <h1 className={`${oregano.className} text-6xl text-amber-50`}>
          Contacto
        </h1>
        <div className="flex flex-col justify-center items-center mb-20">
          <Button
            startContent={<Image alt="pencil" src={pencil} width={20} />}
            as={NextLink}
            href="/google-calendar"
            variant="solid"
            size="lg"
            className="bg-green-500 text-amber-50 mt-5 mb-3"
          >
            Agendar Cita
          </Button>
          <Button
            startContent={<Image alt="phone" src={phone} width={20} />}
            as={Link}
            isExternal
            href="tel:+522464594943"
            variant="solid"
            size="lg"
            className="bg-green-500 text-amber-50 mt-5 mb-3"
          >
            Llamanos
          </Button>
        </div>
        <section className="flex flex-col justify-center items-center bg-white/80 p-4 rounded-sm">
          <h3 className="text-2xl text-stone-600">Ubicación</h3>
          <p className="text-stone-800 text-center mb-3">
            Estamos ubiacos en Calle Miguel Lira y Ortega 23b, Centro, 90000
            Tlaxcala de Xicohténcatl, Tlax.
          </p>
          <p className="text-stone-800 text-center">
            Es tu primera vez? deja que Google te ayude a{" "}
            <Link
              isExternal
              underline="always"
              href="https://maps.app.goo.gl/PEqSNRywS3LK9jJB6"
              className="text-green-500"
            >
              encontrarnos
            </Link>
            .
          </p>
          <p className="text-stone-900 font-bold text-center mt-5">
            Llamanos o mandanos un mensaje
          </p>
          <div className=" w-64 flex justify-between pt-5 pb-3">
            <Link isExternal href="tel:+522464594943">
              <Image alt="phone" src={phone} width={35} />
            </Link>
            <Link isExternal href="https://wa.me/2464594943">
              <Image alt="whatsapp" src={whatsapp} width={35} />
            </Link>
            <Link isExternal href="https://www.facebook.com/HectorChikora">
              <Image alt="facebook" src={facebook} width={35} />
            </Link>
            <Link isExternal href="https://www.instagram.com/hectormuzmos/">
              <Image alt="instagram" src={instagram} width={35} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contacto;

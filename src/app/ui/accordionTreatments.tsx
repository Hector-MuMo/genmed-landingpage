"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import Image from "next/image";
import TreatmentCard from "./treatmentCard";
import surgery from "../../../public/dental-surgery.png";
import floss from "../../../public/floss.png";
import baby from "../../../public/baby-dental.png";
import alineadores from "../../../public/alineadores.png";
import ortodoncia from "../../../public/ortodoncia.png";
import sonrisa from "../../../public/sonrisa.png";
import carilla from "../../../public/carilla.png";
import protesis from "../../../public/protesis.png";
import resinas from "../../../public/resinas.png";
import coronas from "../../../public/corona.png";
import maxilo from "../../../public/doctores.png";
import limpieza from "../../../public/limpieza-niños.png";
import capa from "../../../public/capa.png";
import extraccion from "../../../public/extraccion.png";

const AccordionTreatments = () => {
  return (
    <Accordion selectionMode="multiple" variant="splitted">
      <AccordionItem
        className="bg-white/75 mb-10 px-5 rounded-sm"
        key="2"
        aria-label="Tratamientos Esteticos"
        startContent={
          <Image
            alt="floss"
            src={floss}
            width={50}
            height={50}
            className="rounded-lg"
          />
        }
        title="Tratamientos Esteticos"
      >
        <TreatmentCard img={alineadores} title="Alineadores" index={1}>
          <p className="text-sm text-stone-600 text-justify">
            Los alineadores dentales son{" "}
            <span className="text-stone-900">
              férulas transparentes y removibles diseñadas para enderezar los
              dientes
            </span>
            . Son fabricados a partir de plástico de grado médico y se crean a
            medida para cada paciente utilizando tecnología de imágenes 3D. A lo
            largo del tratamiento, los pacientes reciben una serie de
            alineadores que{" "}
            <span className="text-stone-900">
              se cambian aproximadamente cada dos semanas,
            </span>{" "}
            moviendo gradualmente los dientes hacia su posición deseada. Son una{" "}
            <span className="text-stone-900">
              alternativa discreta y cómoda a los brackets tradicionales,
            </span>{" "}
            ofreciendo una solución estética para mejorar la alineación dental.
          </p>
        </TreatmentCard>
        <TreatmentCard img={ortodoncia} title="Brackets" index={2}>
          <p className="text-sm text-stone-600 text-justify">
            Es de los mejores tratamientos para corregir la posición dental o
            enderezar los dientes. Este tratamiento es efectivo y duradero,
            ideal para quienes buscan una solución completa para problemas de
            maloclusión, es decir, corregir la alineación de los dientes.
          </p>
        </TreatmentCard>
        <TreatmentCard img={sonrisa} title="Blanqueamiento" index={3}>
          <p className="text-sm text-stone-600 text-justify">
            Es de los mejores procedimientos dentales para eliminar manchas y
            decoloraciones de forma rápida y efectiva. Blanquea tus dientes para
            mejorar su apariencia y asegura una buena salud oral. Una sonrisa
            blanca y brillante no solo mejora tu apariencia, sino que también
            puede aumentar tu confianza y proyectar una imagen más saludable.
          </p>
        </TreatmentCard>
        <TreatmentCard img={carilla} title="Carillas" index={4}>
          <p className="text-sm text-stone-600 text-justify">
            Con este tipo de tratamiento dental, podrás corregir imperfecciones
            y disfrutar de una sonrisa perfecta que refleje tu personalidad y
            confianza ¿Por qué es importante realizarlo? Para transformar tu
            sonrisa, corrigiendo imperfecciones que afectan tu autoestima
          </p>
        </TreatmentCard>
      </AccordionItem>
      <AccordionItem
        className="bg-white/75 mb-10 px-5 rounded-sm"
        key="1"
        aria-label="Tratamientos Clinicos"
        startContent={
          <Image
            alt="dental surgery"
            src={surgery}
            width={50}
            height={50}
            className="rounded-lg"
          />
        }
        title="Tratamientos Clinicos"
      >
        <TreatmentCard img={protesis} title="Implantes" index={5}>
          <p className="text-sm text-stone-600 text-justify">
            Recupera la funcionalidad y estética de tu sonrisa con nuestros
            implantes dentales. Es uno de los tratamientos más comunes para
            reemplazar los dientes perdidos de manera permanente, mejorando tu
            calidad de vida y confianza. ¿Por qué es importante realizarlo? Los
            implantes restauran tu sonrisa y previenen la pérdida ósea,
            manteniendo la integridad de tu rostro.
          </p>
        </TreatmentCard>
        <TreatmentCard img={resinas} title="Resinas Dentales" index={6}>
          <p className="text-sm text-stone-600 text-justify">
            Repara tus dientes dañados con nuestras resinas dentales, una
            solución estética y funcional que se adapta perfectamente a tu
            sonrisa. Este tipo de tratamiento es ideal para quienes buscan una
            opción rápida y efectiva. ¿Por qué es importante realizarlo? Las
            resinas restauran la estructura dental de forma estética y
            funcional, previniendo el avance de caries.
          </p>
        </TreatmentCard>
        <TreatmentCard img={coronas} title="Coronas Dentales" index={7}>
          <p className="text-sm text-stone-600 text-justify">
            Protege y restaura tus dientes dañados con nuestras coronas
            dentales. Este tratamiento es ideal para mantener la funcionalidad y
            estética de tu sonrisa, asegurando que cada diente cumpla su
            función. ¿Por qué es importante realizarlo? Las coronas protegen y
            fortalecen dientes comprometidos, evitando su pérdida.
          </p>
        </TreatmentCard>
        <TreatmentCard img={maxilo} title="Cirugia Maxilofacial" index={8}>
          <p className="text-sm text-stone-600 text-justify">
            Aborda problemas complejos de los huesos faciales y maxilares con
            nuestra cirugía maxilofacial. Este tratamiento es crucial para
            corregir deformidades y mejorar tu calidad de vida. ¿Por qué es
            importante realizarlo? Este tratamiento es crucial para corregir
            deformidades y trastornos funcionales que afectan tu calidad de
            vida.
          </p>
        </TreatmentCard>
      </AccordionItem>
      <AccordionItem
        className="bg-white/75 mb-10 px-5 rounded-sm"
        key="3"
        aria-label="Tratamientos Infantiles"
        startContent={
          <Image
            alt="baby dental"
            src={baby}
            width={50}
            height={50}
            className="rounded-lg"
          />
        }
        title="Tratamientos Infantiles"
      >
        <TreatmentCard
          img={limpieza}
          title="Limpieza dental infantil + flúor"
          index={9}
        >
          <p className="text-sm text-stone-600 text-justify">
            Ayuda a prevenir la aparición de caries dental, además de eliminar
            el sarro y la placa. Usamos herramientas especiales para limpiar los
            dientes de tu hijo de manera suave y efectiva. Se complementa con
            aplicación de flúor.
          </p>
        </TreatmentCard>
        <TreatmentCard img={capa} title="Selladores dentales" index={10}>
          <p className="text-sm text-stone-600 text-justify">
            Los selladores dentales son una medida preventiva que protege los
            dientes de los niños contra las caries dentales. Se aplican en las
            superficies masticatorias de los molares y premolares para evitar
            que los restos de comida y las bacterias se acumulen.
          </p>
        </TreatmentCard>
        <TreatmentCard img={extraccion} title="Extracciones" index={11}>
          <p className="text-sm text-stone-600 text-justify">
            ¡Adiós diente! Sin dolor y listo para el ratón de los dientes.
            Removemos piezas dentales dañadas o problemáticas de manera segura y
            sin dolor.
          </p>
        </TreatmentCard>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionTreatments;

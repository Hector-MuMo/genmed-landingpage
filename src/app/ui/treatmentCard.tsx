import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react'

interface TreatmentCardProps {
  img: StaticImageData | string;
  title: string;
  children: ReactNode
  index?: number
}

const TreatmentCard = ({img, title, children, index}: TreatmentCardProps) => {
  return (
    <div className={`flex flex-col items-center ${ index && index % 2 === 0 ? "bg-green-300" : "bg-white" } p-4 rounded-sm`}>
          <Image alt={title} src={img} width={80} />
          <h5 className="mb-3 text-lg text-stone-800">{title}</h5>
          <p className="text-sm text-stone-600 text-justify">
            {children}
          </p>
            <Button
            as={Link}
            href="/google-calendar"
            variant="solid"
            className={`mt-3 ${ index && index % 2 === 0 ? "bg-white text-green-500" : "bg-green-500 text-amber-50" }`}
          >
            Agendar Cita
          </Button>
        </div>
  )
}

export default TreatmentCard
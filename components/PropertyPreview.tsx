import { Property } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    property: Property
}

const PropertyPreview: React.FC<Props> = ({ property }) => {


    return (

        <li
            className="
                rounded-2xl w-full sm:w-80 md:w-96 h-80 bg-white drop-shadow-lg
                hover:brightness-105 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out
                "
        >
            <Link href={`/property/${property.id}`} aria-label="aller à la page du logement">
                <div className="w-full h-3/5 bg-white rounded-t-xl overflow-hidden relative">
                    <Image src={`/properties-img/${property.imagepath}`} alt="Photo du logement" fill sizes="384px" className="object-cover" />
                </div>
                <div className="px-2 mt-2 flex flex-col justify-between h-28">
                    <div>
                        <h2 className="text-lg font-bold">{property.name}</h2>
                        <p className="text-slate-400">{property.description}</p>
                    </div>
                    <p className="flex w-full justify-end items-center">
                        <span className="font-bold text-xl m-0.5">{property.price}</span>
                        <span>€/mois</span>
                    </p>
                </div>
            </Link>
        </li>

    )
}

export default PropertyPreview
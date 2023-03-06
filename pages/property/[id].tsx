import Button from '@/components/Button'
import { Property, ResponseError } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function PropertyPage() {
  const { query } = useRouter()
  const { data, error, isLoading } = useSwr<
    Property,
    ResponseError
  >(() => (query.id ? `/api/properties/${query.id}` : null), fetcher)

  if (error) return <div>{error.message}</div>
  if (isLoading) return <div>Chargement...</div>
  if (!data) return null

  return (
    <main className="p-4 flex flex-col lg:flex-row justify-between text-center lg:text-left">
      <div>
        <h2 className="text-xl font-bold">{data.name}</h2>
        <p className="text-slate-400 my-2">{data.description}</p>
        <div>
          <span className="font-bold text-xl m-0.5">{data.price}</span>
          <span>€/mois</span>
        </div>
        <div className="hidden lg:block my-4">
          <Link href="/" aria-label="retour">
            <Button content={"Retourner à mes logements"} />
          </Link>
        </div>
      </div>
      <div className="my-2 lg:my-0 lg:mx-2 flex justify-center">
        <Image
          src={`/properties-img/${data.imagepath}`}
          alt="Photo du logement"
          width={800}
          height={800}
          className="rounded-xl mb-4"
        />
      </div>
      <div className="lg:hidden">
        <Link href="/" aria-label="retour">
          <Button content={"Retourner à mes logements"} />
        </Link>
      </div>


    </main>
  )
}

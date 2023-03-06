import useSwr from 'swr'
import PropertyPreview from '@/components/PropertyPreview'
import { NextPage } from 'next'
import { Property } from '@/interfaces'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Home: NextPage = () => {
  const { data, error } = useSwr('/api/properties', fetcher)

  if (error) return <div>Le chargement des données a échoué.</div>
  if (!data) return <div>Chargement...</div>

  // Sort properties by name 
  const sortedData = data.sort((a: Property, b: Property) => a.name.localeCompare(b.name))

  return (
    <>
      <main className="p-4">
        <section className="pb-4 text-lg text-slate-600">
          Trouvez la collocation de vos rêves, partout en France!
        </section>
        <ul className="my-2 flex flex-wrap place-content-around gap-4 place-items-center">
          {sortedData.map((property: Property) => (
            <PropertyPreview property={property} key={property.id + property.name} />
          ))}
        </ul>
      </main>

    </>
  )
}

export default Home

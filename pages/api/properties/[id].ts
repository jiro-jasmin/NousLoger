import type { NextApiRequest, NextApiResponse } from 'next'
import { Property, ResponseError } from '@/interfaces'
import { properties } from '@/data'

export default function propertyHandler(req: NextApiRequest, res: NextApiResponse<Property | ResponseError >) {
    const { query } = req
    const { id } = query
    const property = properties.find((p) => p.id === id)
  
    // Property with id exists
    return property
      ? res.status(200).json(property)
      : res.status(404).json({ message: `Le logement avec l'identifiant ${id} n'a pas été trouvé.` })
  
}

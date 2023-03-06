import type { NextApiRequest, NextApiResponse } from 'next'
import { Property } from '@/interfaces'
import { properties } from '@/data'

export default function handler(_req: NextApiRequest, res: NextApiResponse<Property[]>) {
  // Get data
  res.status(200).json(properties)
}

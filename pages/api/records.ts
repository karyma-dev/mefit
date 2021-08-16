import dbConnect from '../../../utils/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  if (req.method === 'POST') {
    console.log(req.body)
  } else if (req.method === 'GET') {
  }
}

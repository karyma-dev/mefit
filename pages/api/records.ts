import dbConnect from '../../utils/mongodb'
import User from '../../models/User'
import { getSession } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { user } = getSession(req, res)
  await dbConnect()

  if (req.method === 'POST') {
    const userInfo = user
    const record = req.body

    User.findOne({ email: user.email }, (err, user) => {
      if (user) {
        User.updateOne({ _id: user._id }, { $push: { records: record } }).then(
          () => res.status(201).json({ successMessage: 'Record Added to User' })
        )
      } else {
        User.create({ ...userInfo, records: [record] }).then(() => {
          res.status(201).json({ successMessage: 'Record Added to User' })
        })
      }
    })
  }
}

export default handler

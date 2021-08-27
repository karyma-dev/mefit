import dbConnect from '../../utils/mongodb'
import User from '../../models/User'
import { getSession } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { user } = getSession(req, res)
  await dbConnect()

  const userInfo = user
  const record = req.body

  switch (req.method) {
    case 'GET':
      console.log('GET')
      User.findOne({ email: user.email }, (err, user) => res.json(user.records))
      break
    case 'POST':
      if (user.email_verified === false)
        return res
          .status(400)
          .json({ errorMessage: 'Please verify your email' })

      try {
        User.findOne({ email: user.email }, (err, user) => {
          if (user) {
            User.updateOne(
              { _id: user._id },
              { $push: { records: record } }
            ).then(() =>
              res.status(201).json({ successMessage: 'Record Added to User' })
            )
          } else {
            User.create({ ...userInfo, records: [record] }).then(() => {
              res.status(201).json({ successMessage: 'Record Added to User' })
            })
          }
        })
      } catch (err) {
        return res.status(400).json({
          errorMessage: 'An error has occured, please try again later',
        })
      }
      break
    default:
      break
  }
}

export default handler

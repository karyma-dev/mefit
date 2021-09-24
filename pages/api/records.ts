import dbConnect from '../../utils/mongodb'
import User from '../../models/User'
import _ from 'lodash'
import { getSession } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { ObjectId } from 'mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { user } = getSession(req, res)
  await dbConnect()

  const userInfo = user
  const { exercise, date, set, rep, weight, rpe, totalVolume } = req.body

  const record = {
    exercise: _.capitalize(exercise),
    date,
    set,
    rep,
    weight,
    rpe,
    totalVolume,
  }

  switch (req.method) {
    case 'GET':
      User.findOne({ email: user.email }, (err, user) => {
        if (user === null) {
          res
            .status(400)
            .json({ errorMessage: 'Please add atleast one record' })
        } else {
          res.status(200).json(user.records)
        }
      })
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
    case 'DELETE':
      const id = req.body
      User.findOne({ email: user.email }, (err, user) => {
        if (err) res.status(400).json({ errorMessage: 'Error finding user' })

        if (user) {
          const record = user.records.find(
            (record) => new ObjectId(record._id).toString() === id
          )

          if (record) {
            User.updateOne(
              { _id: user.id },
              { $pull: { records: record } }
            ).then(() =>
              res
                .status(201)
                .json({ successMessage: 'Record Successfully Removed' })
            )
          } else {
            res.status(400).json({
              errorMessage: 'Record not found',
            })
          }
        } else {
          res.status(400).json({
            errorMessage: 'User not found',
          })
        }
      })

      break
    default:
      break
  }
}

export default handler

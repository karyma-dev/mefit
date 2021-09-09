import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import _ from 'lodash'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const firstName = _.capitalize(req.body.firstName)
  const lastName = _.capitalize(req.body.lastName)
  const email = req.body.email

  if (!firstName || !lastName || !email)
    return res
      .status(400)
      .json({ message: 'Please do not leave any fields blank', type: 'error' })

  try {
    const { url, data, headers } = getRequestParams(email, firstName, lastName)

    await axios.post(url, data, { headers })

    return res
      .status(201)
      .json({ message: 'Signed up successfully', type: 'success' })
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: `Invalid Email or Email is already taken`,
      type: 'error',
    })
  }
}

function getRequestParams(
  email_address: string,
  first_name: string,
  last_name: string
) {
  console.log(email_address)
  const API_KEY = process.env.MAILCHIMP_API_KEY
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
  const DATACENTER = process.env.MAILCHIMP_DATA_CENTER
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

  // https://mailchimp.com/developer/marketing/api/list-members/add-member-to-list/
  const data = {
    email_address,
    status: 'subscribed',
    merge_fields: {
      FNAME: first_name,
      LNAME: last_name,
    },
  }

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64')

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${base64ApiKey}`,
  }

  return {
    url,
    data,
    headers,
  }
}

export default handler

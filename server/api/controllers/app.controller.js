import fetch from 'node-fetch'
import got from 'got'
const prompt = `they are`

export async function tester() {
  const url = 'https://api.openai.com/v1/engines/davinci/completions'
  const params = {
    prompt: prompt,
    max_tokens: 160,
    temperature: 0.7,
    frequency_penalty: 0.5,
  }
  const headers = {
    Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`,
  }

  try {
    const response = await got
      .post(url, { json: params, headers: headers })
      .json()
    const output = `${response.choices[0].text}`
    console.log(output)
  } catch (err) {
    console.log(err)
  }
}

const token = process.env.BEARER_TOKEN
// const api = "https://api.twitter.com/2"
const api = 'http://localhost/5000'

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token || ''}`,
  },
}

export default class AppController {
  static async apiGetDescriptionText(req, res) {
    // Get users username from body
    const { username } = req.body

    let tweets_of_user
    // Get tweets of user
    try {
      const user_req = await fetch(
        `${api}/users/by/username/${username}`,
        options
      )
      const { data: user } = await user_req.json()

      const tweets_of_user_req = await fetch(
        `${api}/users/${user.id}/tweets`,
        options
      )
      const { data: tweets_of_user } = await tweets_of_user_req.json()
    } catch (e) {
      console.error(e)
    }

    // Generate description

    // Send back description
    const user_description = 'ye bro u good'
    res.json({ user_description: user_description })
  }
}

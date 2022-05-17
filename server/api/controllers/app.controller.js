export default class AppController {
  static async apiGetDescriptionText(req, res) {
    // Get users tweets from body
    const { tweets } = req.body

    // Generate description


    // Send back description
    const user_description = "ye bro u good"
    res.json({ user_description: user_description })
  }
}
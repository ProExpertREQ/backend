class HomeController {
  async index(req, res) {
    res.json({ message: 'API running' });
  }
}

export default new HomeController();

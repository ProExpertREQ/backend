class HomeController {
  async index(req, res) {
    res.json('Hello World!');
  }
}

export default new HomeController();

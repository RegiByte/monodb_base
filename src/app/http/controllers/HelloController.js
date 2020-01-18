import Controller from '../../../lib/Controller';

class HelloController extends Controller {
  index(req, res) {
    res.json({
      message: 'ok',
    });
  }
}

export default new HelloController();

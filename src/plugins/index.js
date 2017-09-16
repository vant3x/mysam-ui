import reply from './reply';
import learn from './learn';
import hi from './hi';
import home from './home';
import help from './help';

export default function () {
  return function (app) {
    app.configure(reply)
      .configure(learn)
      .configure(hi)
      .configure(home)
      .configure(help);
  };
}
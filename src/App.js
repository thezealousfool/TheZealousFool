import { version } from 'inferno';
import Component from 'inferno-component';
import './registerServiceWorker';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptas atque, eum, voluptatibus nobis repellat delectus quidem quia illo nostrum distinctio. Ullam laborum pariatur aliquam, velit vel sunt animi? Deserunt!</p>
      </div>
    );
  }
}

export default App;

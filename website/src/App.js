import './App.css';
import Footer from './footer.js';
import { Switch, Route } from 'react-router-dom';
import About from './about.js';
import Home from './home.js';
// import Board from './board.js'; comment back in when finished
import Tile from './tile.js';
import Filter from './filter.js';

function App() {
  return (
    <div>
      <Switch>
        {/* uncomment routes when routes completed */}
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
        {/* <Route path="/projects" component={Projects}/> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

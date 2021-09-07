import './App.css';
import Footer from './header-footer/footer.js';
import { Router, Switch, Route } from 'react-router-dom';
import About from './about/about.js';
import Home from './home/home.js';
import Projects from './projects/projects.js';
import Events from './events/events.js';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/events" component={Events} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './css/custom.css';

//components and pages
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
//projects START
import WordPressApi from './pages/projects/WordPressApi';
import Blogs from './pages/projects/Blogs';
import List from './pages/projects/List';
import ApiProject from './pages/projects/ApiProject';
import GridProject from './pages/projects/GridProject';
import ReactProject from './pages/projects/ReactProject';
//projects END
import About from './pages/About';
import Contact from './pages/Contact';

//error page
import Error404 from './pages/Error404';

class App extends Component {
  render() {
    const App = () => (
      <div className={ (localStorage.getItem('background') === 'bg-light') ? "bg-light text-dark" : "bg-dark text-light" }>
        <Header className='navbar navbar-expand-lg navbar-light bg-light text-dark'> 
        
        </Header>
        <div className='container full-page'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/projects' exact component={Projects} />
            <Route path='/projects/react-project' component={ReactProject}/>
            <Route path='/projects/grid-project' component={GridProject}/>
            <Route path='/projects/api-project' exact component={ApiProject}/>
            <Route path='/projects/list' component={List}/>
            <Route path='/projects/blogs-project' component={Blogs}/>
            <Route path='/projects/wordpress-project' component={WordPressApi}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='*' component={Error404}/>
          </Switch>
        </div>
        <Footer />
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
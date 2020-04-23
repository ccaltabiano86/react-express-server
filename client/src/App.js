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
import JsonApiProject from './pages/projects/JsonApiProject';
import WordPressApi from './pages/projects/WordPressApi';
import Blogs from './pages/projects/Blogs';
import List from './pages/projects/List';
import ApiProject from './pages/projects/ApiProject';
import GridProject from './pages/projects/GridProject';
import ReactProject from './pages/projects/ReactProject';
//projects END
import About from './pages/About';
//about START
import Documentation from './pages/about/Documentation';
import Contact from './pages/about/Contact';
//about END

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
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/projects/react-project' component={ReactProject}/>
            <Route exact path='/projects/grid-project' component={GridProject}/>
            <Route exact path='/projects/api-project' component={ApiProject}/>
            <Route exact path='/projects/list' component={List}/>
            <Route exact path='/projects/blogs-project' component={Blogs}/>
            <Route exact path='/projects/wordpress-project' component={WordPressApi}/>
            <Route exact path='/projects/json-api-project' component={JsonApiProject}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/about/contact' component={Contact}/>
            <Route exact path='/about/documentation' component={Documentation}/>
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
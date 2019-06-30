import React, { Fragment, Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data/portfolio';
import './sass/main.scss';

class App extends Component {

  constructor(props){
    super(props);

  }


  render() {
    return (
      <Fragment>
       <Header portfolioData={ portfolioData } />
        <main className="site-main" id="home">
          <Hero portfolioData={ portfolioData } id="home" />          
          <Projects portfolioData={ portfolioData }/>
          <Skills portfolioData={ portfolioData }/>
          <Timeline portfolioData={ portfolioData } />
          <Contact />
        </main> 
       <Footer />
      </Fragment>
    );   
  }

}

export default App;

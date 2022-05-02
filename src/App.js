import './App.css';
import Header from './components/header';
import First from './components/first';
import Skills from './components/skills';
import web from './pics/web.png';
import design from './pics/design.png';
import team from './pics/teamwork.png';
import Languages from './components/languages';
import Project from './components/project';
import React from 'react';
/* import Contact from './components/contact'; */

function App() {

  return (
    <div className="App">
      <header className="App-header absolute flex flex-wrap">
        <div className='w-full'>
          <Header />
        </div>
        <div className='w-full pt-10'>
          <First />
        </div>
        <div className='w-full flex flex-row pl-10 pr-10 pt-10 justify-between' id='skills'>
          <Skills color="bg-green" pic={web} header="Web Development"
            text="One of my passion is coding. Take a look at my Github for some projects I did."
          />
          <Skills color="bg-purple" pic={design} header="UI/UX design"
            text="I designed multiple websites and apps with figma. Just take this one as an example!"
          />
          <Skills color="bg-blue" pic={team} header="Teamwork"
            text="I just love working in a team! You can get things done faster, more efficient and everyone gets some inspiration by the others."
          />
        </div>
        <div className='min-w-full justify-center flex' id='languages'>
          <Languages />
        </div>
        <div className='w-full pl-10 pr-10 pt-10 flex flex-wrap-reverse gap-10' id='projects'>
          <Project name={"Portfolio Website"} pic={"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"} link={"https://github.com/Luca-py/portfolio"} description={"This is the source code for this Website. I used React and some libraries to build it."}/>
        </div>
        <div className='min-w-full justify-center flex pt-10' id='contact'>
          {/* <Contact /> */}
        </div>
      </header>
    </div>
  );
}

export default App;

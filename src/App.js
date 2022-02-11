import { useRef } from 'react';
import title from './assets/elements/title.png'
import start from './assets/elements/start-color.png'
import daisy from './assets/elements/intro-daisy.png'

import './App.css';

function App() {

  const introRef = useRef();

  return (
    <div className="layout">
      <div className="section-title">
        <img className="image-title" src={title} alt="title" />
        <div className="stage" onClick={() => introRef.current.scrollIntoView({ behavior: 'smooth' })}>
          <img className="image-button bounce-big" src={start} alt="start" />
        </div>
      </div>
      <div className="section-intro" ref={introRef}>
        <img className="img-intro daisy" src={daisy} alt="start" />
        <p className="img-intro hello">Hello</p>
        <div className="circle">
          <p>I’m an art enthusiast who loves to solve problems using code and try to create useful plus beautiful web application.</p>
        </div>
      </div>
    </div>
  );
}

export default App;

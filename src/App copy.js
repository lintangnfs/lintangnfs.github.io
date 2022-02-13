import { useRef } from 'react';
import title from './assets/elements/title.png'
import start from './assets/elements/start-color.png'
import introduction from './assets/elements/introduction.png'

import './App.css';

function App() {

  const introRef = useRef();

  return (
    <div className="layout">
      <div className="section-title">
        {/* <img className="image-title" src={title} alt="title" /> */}
        {/* <div className="stage" onClick={() => introRef.current.scrollIntoView({ behavior: 'smooth' })}>
          <img className="image-button bounce-big" src={start} alt="start" />
        </div> */}
      </div>
      <div className="section-intro" ref={introRef}>
        <div className="container-intro">
          {/* <img className="img-intro absolute-top" src={introduction} alt="start" /> */}
          {/* <div className="card"> */}
          {/* <div className="card-content"> */}
          {/* <p>I’m an art enthusiast who loves to solve problems using code and try to create useful plus beautiful web application.</p>
              Hahah */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
      {/* <div className="section-porto">
      </div> */}
    </div >
  );
}

export default App;

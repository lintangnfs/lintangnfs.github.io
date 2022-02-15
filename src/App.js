import { useRef } from 'react';
import title from './assets/elements/title.png'
import start from './assets/elements/start-color.png'

import './App.css';

function App() {

  const introRef = useRef();

  return (
    <>
      <div className="section-title">
        <img className="image-title" src={title} alt="title" />
        <div className="stage" onClick={() => introRef.current.scrollIntoView({ behavior: 'smooth' })}>
          <img className="image-button bounce-big" src={start} alt="start" />
        </div>
      </div>
      <div ref={introRef} className="section-intro">
        <div className="wrapper">
          <div className="container-intro">
            <div className="wrapper-intro">
              <div className="intro">Hello, i'm a</div>
              <div className="dynamic-text">
                <div className="box text-animation-1"><span>passionate</span></div>
                <div className="box text-animation-2"><span><div>mindfull</div></span></div>
                <div className="box text-animation-3"><span>creative</span></div>
              </div>
            </div>
          </div>
          <div className="intro bold">Frontend Engineer</div>
        </div>
        <div style={{ display: 'flex' }}>

        </div>
      </div>
      <div className="section-porto">
        <div style={{ position: 'absolute', bottom: '0' }}>
          Phyllalintang Nafasa
        </div>
      </div>
    </>
  );
}

export default App;

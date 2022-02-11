import './App.css';
import title from './assets/elements/title.png'
import start from './assets/elements/start-color.png'

function App() {
  return (
    <div className="layout">
      <div className="section-title">
        <img className="image-title" src={title} alt="title" />
        <div className="stage">
          <img className="image-button bounce-big" src={start} alt="start" />
        </div>
      </div>
    </div>
  );
}

export default App;

import PlotPage from './PlotPage';
import { Routes, Route, Link } from 'react-router-dom';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<PlotPage />} />
      </Routes>
      <PlotPage story="Monte Cristo"></PlotPage>
    </div>
  );
}

export default App;

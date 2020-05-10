import React from 'react';
import logo from './logo.svg';
import Upload from './components/upload/Upload'
import LineChart from './components/LineGraph/LineGrpah'
import SplineChart from './components/SplineChart/splinechart'
import './App.scss';

function App() {
  return (
    <div className="App">
      <SplineChart/>
    </div>
  );
}

export default App;

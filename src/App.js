import "./App.css";
import ModeChoice from "./mode-choice";
import SquarePanel from "./square-panel";
import {useState} from 'react';

function App() {
  const [size,setSize]=useState();

  const onChoice=(size1)=>{
    setSize(size1);
  }

  return (
    <div className="App">
      <ModeChoice onChoice={onChoice}/>
      <SquarePanel squareSize={size}/>
    </div>
  );
}

export default App;

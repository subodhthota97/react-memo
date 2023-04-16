import React, { useCallback, useState } from 'react';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log("App running");

  const toggleParagraghHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);


  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show = {true}/>
      <Button onClick={toggleParagraghHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;

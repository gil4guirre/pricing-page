import React, { useState } from 'react';
import './App.css';
import Frequency from './components/Frequency/Frequency';
import SignaturePlans from './components/SignaturePlans/SignaturePlans';

function App() {
  const [annually, setAnnual] = useState(false)
  return (
    <div className="App">
      TÍTULO
      <Frequency 
        annually={annually}
        setAnnual={setAnnual}
      />
      <SignaturePlans annually={annually}/>
    </div>
  );
}

export default App;

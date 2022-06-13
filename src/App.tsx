import React, { useState } from 'react';
import './App.css';
import Frequency from './components/Frequency/Frequency';
import SignaturePlans from './components/SignaturePlans/SignaturePlans';

function App() {
  const [annual, setAnnual] = useState(false)
  return (
    <div className="App">
      TÍTULO
      <Frequency 
        annual={annual}
        setAnnual={setAnnual}
      />
      <SignaturePlans annual={annual}/>
    </div>
  );
}

export default App;

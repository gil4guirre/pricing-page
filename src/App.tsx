import React, { useState } from 'react';
import Frequency from './components/Frequency/Frequency';
import SignaturePlans from './components/SignaturePlans/SignaturePlans';

function App() {
  const [annually, setAnnual] = useState(false)
  const importedDiscount = 15;
  return (
    <div className="App">
      TÍTULO
      <Frequency 
        importedDiscount={importedDiscount}
        annually={annually}
        setAnnual={setAnnual}
      />
      <SignaturePlans 
        annually={annually}
        importedDiscount={importedDiscount}
      />
    </div>
  );
}

export default App;

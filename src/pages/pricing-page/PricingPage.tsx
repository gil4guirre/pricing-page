import React, { useState } from 'react';
import Frequency from '../../components/Frequency';
import Header from '../../components/Header';
import SignaturePlans from '../../components/SignaturePlans';
import style from './PricingPage.module.scss';

function PricingPage() {
  const [annually, setAnnual] = useState(false)
  const importedDiscount = 15;
  return (
    <div className={style.PricingPage}>
      <Header />
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

export default PricingPage;

import Form from "./Form";
import React, { useState } from "react";
import { currencies } from './currencies.js'
import { GlobalStyle } from "./GlobalStyle";

function App() {

  const [result, setResult] = useState(null)

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ short }) => short === currency).rate

    setResult({
      targetAmount: amount / rate,
      currency
    })
  };

  return (
    <div className="container">
      <GlobalStyle/>
      <Form
        result={result}
        calculateResult={calculateResult} />
    </div>
  );
}
export default App;

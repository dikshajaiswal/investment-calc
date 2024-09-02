import UserInputs from "./components/UserInputs";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";
import Log from "./components/Log";

const VALUES = {
  INITIAL: 0,
  ANNUAL: 1,
  RETURN: 2,
  DURATION: 3,
};

function App() {
  const [values, setValues] = useState(VALUES);
  // const [netReturns, setNetReturns] = useState([]);

  function handleValChange(symbol, newVal) {
    console.log(newVal);
    setValues(prevValues => {
      return {
        ...prevValues,
        [symbol]: newVal
      };
    });
  }
  console.log("printing updated values");
  console.log(values.INITIAL);
  console.log(values.ANNUAL);
  console.log(values.RETURN);
  console.log(values.DURATION);

  let annualReturns = calculateInvestmentResults({initialInvestment:values.INITIAL, annualInvestment: values.ANNUAL, expectedReturn: values.RETURN, duration:values.DURATION});
  console.log(annualReturns);

  return (
    <main>
      <div id="calc-container">
        <ol id="investments">
          <UserInputs initialVal={VALUES.INITIAL} symbol="INITIAL" onChangeVal={handleValChange}/>
          <UserInputs initialVal={VALUES.ANNUAL} symbol="ANNUAL" onChangeVal={handleValChange}/>
        </ol>
        <ol id="investments">
          <UserInputs initialVal={VALUES.RETURN} symbol="RETURN" onChangeVal={handleValChange}/>
          <UserInputs initialVal={VALUES.DURATION} symbol="DURATION" onChangeVal={handleValChange}/>
        </ol>
      </div>
      <Log netReturns={annualReturns} />
    </main>
  );
}

export default App

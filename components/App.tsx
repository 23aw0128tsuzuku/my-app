
import React, { useState } from 'react';


const App: React.FC = () => {
  const [num1, setNum1] = useState<number | string>('');
  const [num2, setNum2] = useState<number | string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleNum1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(e.target.value);
  };

  const handleOperation = (operator: string) => {
    const number1 = parseFloat(num1 as string);
    const number2 = parseFloat(num2 as string);

    if (isNaN(number1) || isNaN(number2)) {
      alert('Please enter valid numbers');
      return;
    }

    let result: number;

    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        if (number2 === 0) {
          alert('Cannot divide by zero');
          return;
        }
        result = number1 / number2;
        break;
      default:
        return;
    }

    setResult(result);
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <input type="text" value={num1} onChange={handleNum1Change} placeholder="Enter first number" />
      <input type="text" value={num2} onChange={handleNum2Change} placeholder="Enter second number" />
      <div>
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('/')}>/</button>
      </div>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
};

export default App;

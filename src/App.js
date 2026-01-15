import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('0');
  const [previousInput, setPreviousInput] = useState('');
  const [operator, setOperator] = useState('');
  const [resetInput, setResetInput] = useState(false);

  // Función para agregar números
  const handleNumberClick = (number) => {
    if (input === '0' || resetInput) {
      setInput(number);
      setResetInput(false);
    } else {
      setInput(input + number);
    }
  };

  // Función para agregar punto decimal
  const handleDecimalClick = () => {
    if (!input.includes('.')) {
      setInput(input + '.');
    }
  };

  // Función para manejar operadores
  const handleOperatorClick = (op) => {
    if (operator && previousInput && !resetInput) {
      calculate();
    }
    setPreviousInput(input);
    setOperator(op);
    setResetInput(true);
  };

  // Función para calcular resultado
  const calculate = () => {
    let result = 0;
    const prev = parseFloat(previousInput);
    const current = parseFloat(input);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '×':
        result = prev * current;
        break;
      case '÷':
        result = prev / current;
        break;
      default:
        return;
    }

    // Redondear a 2 decimales si es necesario
    result = Math.round(result * 100) / 100;

    setInput(result.toString());
    setPreviousInput('');
    setOperator('');
    setResetInput(true);
  };

  // Función para borrar todo
  const handleClear = () => {
    setInput('0');
    setPreviousInput('');
    setOperator('');
  };

  // Función para borrar último dígito
  const handleBackspace = () => {
    if (input.length > 1) {
      setInput(input.slice(0, -1));
    } else {
      setInput('0');
    }
  };

  // Función para cambiar signo
  const handleToggleSign = () => {
    if (input !== '0') {
      if (input.startsWith('-')) {
        setInput(input.slice(1));
      } else {
        setInput('-' + input);
      }
    }
  };

  return (
    <div className="App">
      <h1>Calculadora React</h1>
      <div className="calculator">
        <div className="display">
          <div className="previous-input">
            {previousInput} {operator}
          </div>
          <div className="current-input" id="display">
            {input}
          </div>
        </div>

        <div className="buttons">
          {/* Fila 1 */}
          <button className="btn function" onClick={handleClear}>AC</button>
          <button className="btn function" onClick={handleBackspace}>⌫</button>
          <button className="btn function" onClick={handleToggleSign}>±</button>
          <button className="btn operator" onClick={() => handleOperatorClick('÷')}>÷</button>

          {/* Fila 2 */}
          <button className="btn number" onClick={() => handleNumberClick('7')}>7</button>
          <button className="btn number" onClick={() => handleNumberClick('8')}>8</button>
          <button className="btn number" onClick={() => handleNumberClick('9')}>9</button>
          <button className="btn operator" onClick={() => handleOperatorClick('×')}>×</button>

          {/* Fila 3 */}
          <button className="btn number" onClick={() => handleNumberClick('4')}>4</button>
          <button className="btn number" onClick={() => handleNumberClick('5')}>5</button>
          <button className="btn number" onClick={() => handleNumberClick('6')}>6</button>
          <button className="btn operator" onClick={() => handleOperatorClick('-')}>-</button>

          {/* Fila 4 */}
          <button className="btn number" onClick={() => handleNumberClick('1')}>1</button>
          <button className="btn number" onClick={() => handleNumberClick('2')}>2</button>
          <button className="btn number" onClick={() => handleNumberClick('3')}>3</button>
          <button className="btn operator" onClick={() => handleOperatorClick('+')}>+</button>

          {/* Fila 5 */}
          <button className="btn number zero" onClick={() => handleNumberClick('0')}>0</button>
          <button className="btn number" onClick={handleDecimalClick}>.</button>
          <button className="btn operator equals" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
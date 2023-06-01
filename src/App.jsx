/* eslint-disable no-unused-vars */
import { useState }from 'react';
import './App.css';
import NumberInput from './NumberInput.jsx'
import Operator from './Operator.jsx'
import Clear from './Clear.jsx'
import Equals from './Equals.jsx'
import Display from './Display.jsx'
import Decimal from './Decimal.jsx'
import Grid from '@mui/material/Grid'

function App() {
  const [value, setValue] = useState(0);
  const [operator, setOperator] = useState(null);
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <Display value={value} input={input} operator={operator} />
      <Grid container className="buttons">
        <NumberInput text ="1" input={input} setInput={setInput} operator={operator} setValue={setValue} value={value}/>
        <NumberInput text ="1" input={input} setInput={setInput} operator={operator} setValue={setValue} value={value}/>
        <NumberInput text ="1" input={input} setInput={setInput} operator={operator} setValue={setValue} value={value}/>
        <Operator text ="+" setOperator={setOperator} id="add" setValue={setValue} input={input} value={value} setInput={setInput}/>
        <NumberInput text ="1" input={input} setInput={setInput} operator={operator} setValue={setValue} value={value}/>
        <NumberInput text ="1" input={input} setInput={setInput} operator={operator} setValue={setValue} value={value}/>
        <NumberInput text ="1" input={input} setInput={setInput} operator={operator} setValue={setValue} value={value}/>
        <Operator text ="-" setOperator={setOperator} id="subtract" setValue={setValue} input={input} value={value} setInput={setInput}/>
        <NumberInput text ="1" input={input} setInput={setInput} operator={operator} setValue={setValue} value={value}/>
        <NumberInput text ="1" input={input} setInput={setInput} operator={operator} setValue={setValue} value={value}/>
        <NumberInput text ="1" input={input} setInput={setInput} operator={operator} setValue={setValue} value={value}/>
        <Operator text ="*" setOperator={setOperator} id="multiply" setValue={setValue} input={input} value={value} setInput={setInput}/>
        <Equals text="=" setInput={setInput} operator={operator} value={value} input={input} setValue={setValue}/>
        <Clear setInput={setInput} setOperator={setOperator} setValue={setValue}/>
        <Decimal text ="." input={input} setInput={setInput}/>
        <Operator text ="/" setOperator={setOperator} id="divide" setValue={setValue} input={input} value={value} setInput={setInput}/>
      </Grid>
    </div>
  )
}

export default App

/* eslint-disable no-unused-vars */
import * as React from 'react';
import './App.css';
import NumberInput from './NumberInput.jsx'
import Operator from './Operator.jsx'
import Clear from './Clear.jsx'
import Equals from './Equals.jsx'
import Display from './Display.jsx'
import Period from './Period.jsx'
import Grid from '@mui/material/Grid'

function App() {
  const [value, setValue] = React.useState(0);
  const [operator, setOperator] = React.useState(null);
  const [input, setInput] = React.useState('');

  return (
    <div className="App">
      <Display value={value} input={input}/>
      <Grid container className="buttons">
        <NumberInput text ="1" input={input} setInput={setInput}/>
        <NumberInput text ="1" input={input} setInput={setInput}/>
        <NumberInput text ="1" input={input} setInput={setInput}/>
        <Operator text ="+" setOperator={setOperator}/>
        <NumberInput text ="1" input={input} setInput={setInput}/>
        <NumberInput text ="1" input={input} setInput={setInput}/>
        <NumberInput text ="1" input={input} setInput={setInput}/>
        <Operator text ="-" setOperator={setOperator}/>
        <NumberInput text ="1" input={input} setInput={setInput}/>
        <NumberInput text ="1" input={input} setInput={setInput}/>
        <NumberInput text ="1" input={input} setInput={setInput}/>
        <Operator text ="X" setOperator={setOperator}/>
        <Equals text="=" setInput={setInput} operator={operator} value={value} input={input}/>
        <Clear setInput={setInput} setOperator={setOperator} setValue={setValue}/>
        <Period text ="." input={input} setInput={setInput}/>
        <Operator text ="/" setOperator={setOperator}/>
      </Grid>
    </div>
  )
}

export default App

/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import Input from './Input'
import Operator from './Operator'
import Clear from './Clear'
import Equals from './Equals'
import Display from './Display.jsx'

function App() {
  const [value, setValue] = useState(0);
  const [operator, setOperator] = useState('');
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <Display value={value} input={input}/>
      {/*<div className="buttons col-span-4">
        <Input text ="1"/>
        <Input text ="2"/>
        <Input text ="3"/>
        <Operator text ="+" setOperator={setOperator}/>
        <Input text ="4"/>
        <Input text ="5"/>
        <Input text ="6"/>
        <Operator text ="-" setOperator={setOperator}/>
        <Input text ="7"/>
        <Input text ="8"/>
        <Input text ="9"/>
        <Operator text ="X" setOperator={setOperator}/>
        <Clear />
        <Equals />
        <Operator text ="/" setOperator={setOperator}/>
  </div> */}
    </div>
  )
}

export default App

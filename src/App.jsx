/* eslint-disable no-unused-vars */
import './App.css';
import Display from './Display.jsx'
import NumberInput from './NumberInput.jsx'
import Operator from './Operator.jsx'
import Clear from './Clear.jsx'
import Equals from './Equals.jsx'
import Decimal from './Decimal.jsx'
import Grid from '@mui/material/Grid'

export default function App() {

  return (
    <div className="App">
      <Display />
      <Grid container className="buttons">
        <NumberInput text ="1"/>
        <NumberInput text ="2"/>
        <NumberInput text ="3"/>
        <Operator text ="+" id="add" />
        <NumberInput text ="4"/>
        <NumberInput text ="5"/>
        <NumberInput text ="6"/>
        <Operator text ="-"  id="subtract" />
        <NumberInput text ="7"/>
        <NumberInput text ="8"/>
        <NumberInput text ="9"/>
        <Operator text ="*" id="multiply" />
        <Equals text="=" />
        <Clear />
        <Decimal text ="." />
        <Operator text ="/" id="divide" />
      </Grid>
    </div>
  )
}

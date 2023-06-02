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
        <Grid item xs={3}>
          <NumberInput text ="1"/>
        </Grid>
        <Grid item xs={3}>
          <NumberInput text ="2"/>
        </Grid>
        <Grid item xs={3}>
          <NumberInput text ="3"/>
        </Grid>
        <Grid item xs={3}>
          <Operator text ="+" id="add" />
        </Grid>
        <Grid item xs={3}>
          <NumberInput text ="4"/>
        </Grid>
        <Grid item xs={3}>
          <NumberInput text ="5"/>
        </Grid>
        <Grid item xs={3}>
          <NumberInput text ="6"/>
        </Grid>
        <Grid item xs={3}>
          <Operator text ="-"  id="subtract" />
        </Grid>
        <Grid item xs={3}>
          <NumberInput text ="7"/>
        </Grid>
        <Grid item xs={3}>
          <NumberInput text ="8"/>
        </Grid>
        <Grid item xs={3}>
          <NumberInput text ="9"/>
        </Grid>
        <Grid item xs={3}>
          <Operator text ="*" id="multiply" />
        </Grid>
        <Grid item xs={6}>
          <NumberInput text ="0"/>
        </Grid>
        <Grid item xs={3}>
          <Decimal text ="." />
        </Grid>
        <Grid item xs={3}>
          <Operator text ="/" id="divide" />
        </Grid>
        <Grid item xs={6}>
          <Equals text="=" />
        </Grid>
        <Grid item xs={6}>
          <Clear />
        </Grid>
      </Grid>
    </div>
  )
}

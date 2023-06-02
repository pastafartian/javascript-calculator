/* eslint-disable react/prop-types */
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { useStore } from './store.js'

export default function Equals() {
    const input = useStore((state) => state.input);
    const value = useStore((state) => state.value);
    const operator = useStore((state) => state.operator);
    const setInput = useStore((state) => state.setInput);
    const setValue = useStore((state) => state.setValue);

    let operate = (e) => {
        e.preventDefault();

        if (input != '') {
            let calculation = null;

            switch (operator) {
                case 'add':
                    calculation = parseFloat(value) + parseFloat(input);
                    break;
                case'subtract':
                calculation = parseFloat(value) - parseFloat(input);
                    break;
                case 'multiply':
                    calculation = parseFloat(value) * parseFloat(input);
                    break;
                case 'divide':
                    calculation = parseFloat(value) / parseFloat(input);
                    break;
                default:
                    break;
            }
        console.log(calculation);
        setInput('');
        setValue(calculation.toString());
        }
    }

    return (
        <Grid item xs={3} id="equals">
            <Button variant="contained" color="primary" onClick={operate}>
                =
            </Button>
        </Grid>
    )
}
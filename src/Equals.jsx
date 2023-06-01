/* eslint-disable react/prop-types */
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export default function Equals({ text, setValue, value, setInput, input, operator }) {
    let operate = (e) => {
        e.preventDefault();

        if (input != '') {
            let calculation = null;

            switch (operator) {
                case 'add':
                    calculation = Math.parseNumber(value) + Math.parseNumber(input);
                    break;
                case'subtract':
                calculation = Math.parseNumber(value) - Math.parseNumber(input);
                    break;
                case 'multiply':
                    calculation = Math.parseNumber(value) * Math.parseNumber(input);
                    break;
                case 'divide':
                    calculation = Math.parseNumber(value) / Math.parseNumber(input);
                    break;
                default:
                    break;
            }
        setInput('');
        setValue(calculation);
        }
    }

    return (
        <Grid item xs={3} id="equals">
            <Button variant="contained" color="primary" onClick={operate}>
                {text}
            </Button>
        </Grid>
    )
}

/* eslint-disable react/prop-types */
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export default function Operator({ text, setOperator }) {
    switch (text) {
        case '+':
            setOperator('multiply');
            break;
        case '-':
            setOperator('subtract');
            break;
        case '*':
            setOperator('multiply');
            break;
        case '/':
            setOperator('divide')
            break;
        default:
            break;
    }


    return (
        <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={setOperator}>
                {text}
            </Button>
        </Grid>
    )
}

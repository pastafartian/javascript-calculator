/* eslint-disable react/prop-types */
import Button from '@mui/material/Button'

export default function Operator({ text, setOperator }) {

    return (
        <>
            <Button variant="contained" color="primary" onClick={setOperator}>
                {text}
            </Button>
        </>
    )
}

/* eslint-disable react/prop-types */


export default function Display({ value, input}) {
    if (input !== '') {
        return (
            <div>
                <h1>{input}</h1>
            </div>
        )
    } else {
        return (
            <h1>{value}</h1>
        )
    }
}

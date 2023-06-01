/* eslint-disable react/prop-types */


export default function Display({ value, input}) {
    if (input != null) {
        return (
            <h1>{input}</h1>
        )
    } else {
        console.log('hello')
        return (
            <h1>{value}</h1>
        )
    }
}

/* eslint-disable react/prop-types */


export default function Display({ value, input, operator}) {
    return (
        <div id="display">
            <h1>{input === '' ? value : input}</h1>
            <h2>{operator}</h2>
        </div>
    )
}

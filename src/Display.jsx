/* eslint-disable react/prop-types */


export default function Display({ value, input}) {
    return (
        <div id="display">
            <h1>{input === '' ? value : input}</h1>
        </div>
    )
}

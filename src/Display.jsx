/* eslint-disable react/prop-types */


export default function Display({ value, input}) {
    if (input != '') {
        return (
            <div id="display">
                <p>{input}</p>
            </div>
        )
    } else {
        return (
            <p id="display">{value}</p>
        )
    }
}

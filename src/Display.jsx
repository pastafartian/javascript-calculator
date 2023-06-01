/* eslint-disable react/prop-types */


export default function Display({ value, input, operator}) {
    if (input != '') {
        return (
            <div id="display">
                <p>{operator}{input}</p>
            </div>
        )
    } else {
        return (
            <p id="display">{operator}{value}</p>
        )
    }
}

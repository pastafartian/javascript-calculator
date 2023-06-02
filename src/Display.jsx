/* eslint-disable react/prop-types */
import { useStore } from './store.js'


export default function Display() {
    const input = useStore((state) => state.input);
    const value = useStore((state) => state.value);
    const operator = useStore((state) => state.operator);

    return (
        <div id="display">
            <h1>{input === '' ? value : input}</h1>
            <h2>{operator}</h2>
        </div>
    )
}

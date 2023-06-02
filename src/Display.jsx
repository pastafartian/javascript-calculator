/* eslint-disable react/prop-types */
import { useStore } from './store.js'


export default function Display() {
    const useInput = useStore((state) => state.input);
    const useValue = useStore((state) => state.value);
    const useOperator = useStore((state) => state.operator);

    return (
        <div id="display">
            <h1>{useInput === '' ? useValue : useInput}</h1>
            <h2>{useOperator}</h2>
        </div>
    )
}

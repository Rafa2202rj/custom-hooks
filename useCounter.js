import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (valor = 1) => {
        setCounter( counter + valor);
    }

    const decrement = (value = 1) => {
        if(counter === 0) return;
        setCounter( counter - value);
    }

    const reset = () => {
        setCounter( initialValue);
    }

    return {
        counter: counter,
        increment,
        decrement,
        reset,
    }
}
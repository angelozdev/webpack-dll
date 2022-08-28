import React from "react";
import { atom, useSetAtom, useAtomValue } from "jotai";
import { useAtom } from "jotai";

const counterAtom = atom(0);
const double = atom((get) => get(counterAtom) * 2);
const sqrt = atom((get) => Math.sqrt(get(counterAtom)).toFixed(2));
const resetCounterAtom = atom(null, (get, set) => {
  set(counterAtom, 0);
});

const increaseCounter = atom(null, (get, set, update) => {
  set(counterAtom, get(counterAtom) + 1);
});

function App() {
  const [counter, setCounter] = useAtom(counterAtom);
  const doubleCounter = useAtomValue(double);
  const sqrtCounter = useAtomValue(sqrt);
  const reset = useSetAtom(resetCounterAtom);
  const increase = useSetAtom(increaseCounter);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h2>Double: {doubleCounter}</h2>
      <h2>SQRT: {sqrtCounter}</h2>
      <input
        type="number"
        value={counter}
        onChange={({ target: { valueAsNumber } }) => setCounter(valueAsNumber)}
      />
      <button onClick={increase}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;

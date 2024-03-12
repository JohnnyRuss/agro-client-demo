import { useState } from "react";

export default function useCounter() {
  const [counter, setCounter] = useState<number>(0);

  const onIncreaseCount = () => setCounter((prev) => prev + 1);

  const onDecreaseCount = () => setCounter((prev) => prev - 1);

  const onChangeCount = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCounter(() => +e.target.value);

  return { counter, onChangeCount, onIncreaseCount, onDecreaseCount };
}

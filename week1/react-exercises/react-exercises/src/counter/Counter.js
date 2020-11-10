import { useState } from "react";
import Count from "./Count";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  function addOne() {
    setCount(count + 1);
  }
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting!";

  return (
    <div>
      <Count count={count} />
      <p>{feedback}</p>
      <Button setCount={addOne} />
    </div>
  );
};

export default Counter;

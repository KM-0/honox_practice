import { useState } from "hono/jsx";

export default function Counter() {
  const [count, setCount] = useState(5);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

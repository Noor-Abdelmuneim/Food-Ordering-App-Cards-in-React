import { useState } from "react";

function Card() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const price = 10;
   return (
    <div className="card">
      <form>
        <label>
          Enter your Request: <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <h1>{name}</h1>
      </form>
      <p>Price: $10</p>
      <button onClick={() => setCount(count + 1)}>+{count}</button>
      {price*count}
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>Total Price : {price*count}$</p>
    </div>
  );
}
function Card1() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const price = 10;
   return (
    <div className="card">
      <form>
        <label>
          Enter your Request: <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <h1>{name}</h1>
      </form>
      <p>Price: $10</p>
      <button onClick={() => setCount(count + 1)}>+{count}</button>
      {price*count}
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>Total Price : {price*count}$</p>
    </div>
  );
}

export default Card;
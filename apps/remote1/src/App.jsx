import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Remote 1 Application</h1>
      <button onClick={() => setCount(count => count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default App;
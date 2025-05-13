import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Remote 1 Home</h2>
      <button onClick={() => setCount(count => count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

function About() {
  return <h2>About Remote 1</h2>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
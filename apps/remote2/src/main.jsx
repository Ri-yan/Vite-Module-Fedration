import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('remote2-root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;
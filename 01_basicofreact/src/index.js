import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
  // {/* its work without React.StrictMode but developer can use this for optimization */}
    <App />
  // </React.StrictMode>
);


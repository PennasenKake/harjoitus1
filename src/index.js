import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { InfoProvider } from './componets/context';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InfoProvider>
      <Router>
      < App />
      </Router>
    </InfoProvider>
  </React.StrictMode>
);


reportWebVitals();

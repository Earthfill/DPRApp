import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
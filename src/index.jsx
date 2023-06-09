import ReactDOM from 'react-dom/client'

import store from './store.jsx'

import App from './App.jsx'
import '../dist/App.css';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)

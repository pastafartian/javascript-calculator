import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './store.jsx'

import App from './App.jsx'
import '../dist/App.css';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
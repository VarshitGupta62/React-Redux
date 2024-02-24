import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './store/index.jsx';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store} >
    <App />
  </Provider>
   
)

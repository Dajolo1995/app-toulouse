import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ConfigProvider } from "antd";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider>
    <Router>
      <App />
    </Router>
  </ConfigProvider>
)

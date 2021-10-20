import Login from './components/Login/Login';
import Home from './components/Home/Home';

import './App.css';

const code = new URLSearchParams(window.location.search).get("code")

function App() {
  return code ? <Home code={code} /> : <Login />
}

export default App;

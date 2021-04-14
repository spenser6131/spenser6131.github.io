import { BrowserRouter as Router } from 'react-router-dom';

import Header from './containers/Header'
import Main from './containers/Main'
import ColorChanger from 'components/buttons/ColorChanger';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <ColorChanger />
    </Router>
  );
}

export default App;

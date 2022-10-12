import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './components/theme';
import User from './components/user';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <User />
    </div>
  );
}

export default App;

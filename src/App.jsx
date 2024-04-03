import { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header'
import data from './data/data.json'
import Protected from './components/Proteced';
import Home from './pages/Home';

const ThemeContext = createContext()
const ThemeTogleContext = createContext()
function ThemeProvider({ children }) {
  const [isDarkMOde, setIsDarkMode] = useState(false)
  function togleThene() {
    setIsDarkMode(prev => !prev)
  }
  return (
    <ThemeContext.Provider value={isDarkMOde}>
      <ThemeTogleContext.Provider value={togleThene}>
        {children}
      </ThemeTogleContext.Provider>
    </ThemeContext.Provider>
  )
}

export function useThemeToggle() {
  const context = useContext(ThemeTogleContext)
  if (context === undefined) {
    console.log('error');
  }
  return context
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    console.log('error');
  }
  return context
}

function App() {

  return (
    <ThemeProvider>
      <Protected>
        <Header />
      </Protected>
      <Home />
    </ThemeProvider >

  );
}

export default App;
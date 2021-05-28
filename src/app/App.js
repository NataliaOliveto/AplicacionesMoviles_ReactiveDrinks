import Router from './Router';
import { ThemeProvider} from "styled-components";
import { GlobalStyles } from "../components/GlobalStyles";
import { lightTheme, darkTheme } from "../components/Themes";
import  { useDarkMode } from "../components/useDarkMode";  
import React from "react";
import styled from "styled-components";

function App() {

  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
    <> <Switcher onClick={setTheme}>Switch Theme</Switcher>
    <GlobalStyles/>    
    </>
    <Router />
    </ThemeProvider>
  );
}
const Switcher = styled.button`
    position: sticky; 
    top: 0;
    background: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    color: ${({ theme }) => theme.text};
    border-radius: 30px;
    cursor: pointer;
    font-size:0.8rem;
    padding: 0.6rem;
`

export default App;

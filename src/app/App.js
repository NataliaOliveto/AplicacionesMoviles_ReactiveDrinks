import Router from './Router';
import styled from "styled-components";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../components/GlobalStyles";
import { lightTheme, darkTheme } from "../components/Themes"
import React from "react";
import  { useDarkMode } from "../components/useDarkMode"

function App() {

  const [theme, setTheme] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const Navbar = () => {    

    return ( 
      <NavbarStyle>
          <h1>Cocktails blog</h1>          
          <div className="links">
              <a href="/">Home</a>
              <button onClick={setTheme}>Switch Theme</button>
          </div>
      </NavbarStyle>
    );
}

  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles/>
    <div className="App">
    <Navbar />
    </div>
    <Router />
    </>
    </ThemeProvider>
  );
}

const NavbarStyle = styled.div`

    padding: 20px;
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    border-bottom: 1px solid #f2f2f2;

    h1 {
        color: #f1356d;
    }
    .links {
        margin-left: auto;
    }

    a {
        margin-left: 16px;
        text-decoration: none;
        padding: 6px;

        &:hover {
        color: #f1356d;
        }
    }   

`

export default App;

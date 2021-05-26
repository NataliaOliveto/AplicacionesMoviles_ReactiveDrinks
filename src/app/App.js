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

    button {

    background-color: #f1356d;
        color: #fff;
        border: 0;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.75em;
        display: block;
        margin: auto;
        text-align: center;  
        margin-top: 8px;
        cursor: pointer;
        transition: all ease-out 0.1s;
        &:hover {
        filter: brightness(1.20);
        transform: translateY(2px);        
        font-weight: 600;
        } 
    }

`

export default App;

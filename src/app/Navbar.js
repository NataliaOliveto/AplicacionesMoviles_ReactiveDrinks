import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <NavbarStyle>
            <img src="./img/icon.png" alt="logo"></img>
            <h1>Reactive Drinks</h1>
            <div className="links">
            <Link to="/">Home</Link>
            </div>
        </NavbarStyle>
    );
}

const NavbarStyle = styled.nav`

    padding: 20px;
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    border-bottom: 1px solid #f2f2f2;
    position: sticky; 
    top: 0;
    background-color: white;
    h1 {
        padding-left: 20px;
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

export default Navbar;
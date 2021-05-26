import React from "react";
import { useHistory } from 'react-router';
import styled from "styled-components";

const Home = ({ setDrink }) => {
    const [input, setInput] = React.useState();
    const history = useHistory();

    function handleSearchClick(){
        setDrink(input);
        history.replace("/card");
    }

    function handleInputChange(e){
        setInput(e.target.value);
    }

    function handleSurpriseClick(){
        history.replace("/surprisecard");
    }

    return ( 
        <HomeStyle>   
        <div>  
            <input
            placeholder="your favorite drink"
            value={input} 
            onChange={handleInputChange} 
            type="search" />
        </div>
            <ButtonsWrapper>
                <button onClick={handleSearchClick}>Find drink</button>
                <button onClick={handleSurpriseClick}>Surprise drink</button>
            </ButtonsWrapper>
        </HomeStyle>
    );
}

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ButtonsWrapper = styled.div`

    width: 70%;
    display: flex;
    gap: 20px;
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
        &:first-child {
        width: 50%;
        }
        &:last-child {
        width: 50%;
        }
    }
`

export default Home;
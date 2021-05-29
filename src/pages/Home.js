import React from "react";
import { useHistory } from 'react-router';
import styled from "styled-components";

const Home = ({ setDrink }) => {
    const [input, setInput] = React.useState();
    const history = useHistory();
    const [drinkData, setDrinkData] = React.useState();

    React.useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then((response) => response.json()
        .then((data) => setDrinkData(data)))
    }, []);  

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

    function handleDetailsClick(){
        setDrink(drinkData.drinks[0].strDrink);
        history.replace("/card");
    }

    return ( 
        <HomeStyle>  

                <input
                placeholder="type and find your favorite drink"
                value={input} 
                onChange={handleInputChange} 
                type="text" />

            <ButtonsWrapper>
                <button disabled={!input} onClick={handleSearchClick}>Find drink</button>
                <button onClick={handleSurpriseClick}>Surprise drink</button>
            </ButtonsWrapper>
            <Suggestion>
                <h2>↓ r e c o m m e n d e d ↓</h2>
                <h3>{drinkData && drinkData.drinks[0].strDrink}</h3>
                <p>{drinkData && drinkData.drinks[0].strAlcoholic} drink</p>
                <button onClick={handleDetailsClick}>(+) details</button>
            </Suggestion>
        </HomeStyle>
    );
};

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;

    input{
        margin-bottom: 10px;
        box-shadow: 1px 3px 5px rgba(0,0,0,0.1);         
        border: 0px transparent;
        border-radius: 5px;
        height: 25px;
        width: 250px;
        font-size: 1em;

        &::placeholder {
            color: grey;
        }

        &:focus{
            outline: solid;
            outline-width: 1px;
            outline-color: #f1356d;
        }
    }
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
        font-size: 1.1em;
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
        &:disabled{
        filter: none;
        transform: none;
        text-decoration-line: line-through;
        cursor: default;
        }
        &:first-child {
        width: 50%;
        }
        &:last-child {
        width: 50%;
        }
    }
`

const Suggestion = styled.div`
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1); 
    padding: 15px;
    text-align: justify;
    border-radius: 15px;
    margin-bottom: 50px;
    margin-top: 40px;
    width: 200px;
    height: 40px;
    border-left: 5px solid #f1356d;
    text-align: center;
    transition-timing-function: linear;
    &:hover{
        box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        height: auto;
        p{
            visibility: visible;
        }
        h3{
            visibility: visible;
        }
        button{
            visibility: visible;
        }
    }

    button {
        visibility: hidden;
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

    h2{
        color: grey;
        padding: 5px;
        margin-bottom: 0px;
    }

    h3{
        font-size: 20px;
        color: #f1356d;
        margin-bottom: 8px;
        visibility: hidden;
    }

    a{
        text-decoration: none;
    }
    
    p{
        visibility: hidden;
    }
`

export default Home;
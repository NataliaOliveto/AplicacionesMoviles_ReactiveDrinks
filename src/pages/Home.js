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



    const [drinkData, setDrinkData] = React.useState();

    React.useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then((response) => response.json()
        .then((data) => setDrinkData(data)))
    }, []);

    function handleDetailsClick(){
        setDrink(drinkData.drinks[0].strDrink);
        history.replace("/card");
    }

    return ( 
        <HomeStyle>  
            <Suggestion>
                <h2>r e c o m m e n d e d</h2>
                <h3>{drinkData && drinkData.drinks[0].strDrink}</h3>
                <p>{drinkData && drinkData.drinks[0].strAlcoholic} drink</p>
                <button onClick={handleDetailsClick}>(+) details</button>
            </Suggestion>

        <div>  
            <input
            placeholder="your favorite drink"
            value={input} 
            onChange={handleInputChange} 
            type="text" />
        </div>
            <ButtonsWrapper>
                <button disabled={!input} onClick={handleSearchClick}>Find drink</button>
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
    margin-top: 20px;
    width: 200px;
    border-left: 5px solid #f1356d;
    text-align: center;
    &hover{
        box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
    }
    h2{
        color: grey;
        padding: 5px;
        margin-bottom: 10px;
    }
    h3{
        font-size: 20px;
        color: #f1356d;
        margin-bottom: 8px;
    }

    a{
        text-decoration: none;
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
        &:first-child {
        width: 50%;
        }
        &:last-child {
        width: 50%;
        }
    }
`

export default Home;
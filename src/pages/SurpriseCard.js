import React from "react";
import { useHistory } from 'react-router';
import styled from "styled-components";

const SurpriseCard = ( {random} ) => {

    const [drinkData, setDrinkData] = React.useState();
    const history = useHistory();
    const [status, setStatus] = React.useState("idle");

    React.useEffect(() => {
        setStatus("loading")
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then((response) => response.json()
        .then((data) => setDrinkData(data)))
        .catch(error => setStatus("error"))
        .finally(setStatus("idle"))
    }, [random]);

    if(status === "idle"){
        return (
            <DrinkDetails>
                <div>
                <h2>{drinkData && drinkData.drinks[0].strDrink}</h2>
                    <h3>{drinkData && drinkData.drinks[0].strAlcoholic} drink</h3>        
                    {drinkData && (<img src={drinkData.drinks[0].strDrinkThumb} alt={drinkData.drinks[0].strDrink}></img>)  }
                    <h3>Recipe</h3>
                    <p>{drinkData && drinkData.drinks[0].strInstructions}</p>
                    <ButtonsWrapper>
                        <button onClick={() => history.push("./")}>Back Home</button>
                    </ButtonsWrapper>
                </div>
            </DrinkDetails>
        ) ;  
    } else if(status === "loading"){
            return "Loading...";
    }
    else if (status === "error"){
        return "We don't know that drink (yet)";
    }

};

const DrinkDetails = styled.div`
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1); 
    padding: 15px;
    text-align: justify;
    border-radius: 15px;

    h2{
        font-size: 20px;
        color: white;  
        background-color: #f1356d;
        border-radius: 10px;
        padding: 5px;
        text-align: center;
        margin-bottom: 10px;
    }

    h3{
        font-size: 15px;
        color: #f1356d;
        text-align: center;
        margin: 10px;
    }

    img{
        width: 180px;
        height: 250px;
        display: block;
        margin: auto;
        text-align: center;
        border-radius: 10px;
    }
`
const ButtonsWrapper = styled.div`

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
        width: 20%;
        }
    }
`

export default SurpriseCard;
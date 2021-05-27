import React from "react";
import { useHistory } from 'react-router';
import styled from "styled-components";

const DrinkCard = ({ drink, addFavorite, favorite, deleteFavorite }) => {

    const [drinkData, setDrinkData] = React.useState();
    const history = useHistory();
    const [status, setStatus] = React.useState("idle");

    console.log(drink)
    React.useEffect(() => {
        setStatus("loading")
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then((response) => response.json()
        .then((data) => {
            if(data.drinks === null){
                setStatus("error")
            } else {
                setDrinkData(data)
                setStatus("success")
            }
        }))
        .catch(error => setStatus("error"))
    }, [drink]);

    if(drinkData && status === "success"){
        return (
            <DrinkDetails>
                <h2>{drinkData.drinks[0].strDrink}</h2>
                    <h3>{drinkData.drinks[0].strAlcoholic} drink</h3>        
                    {<img src={drinkData.drinks[0].strDrinkThumb} alt={drinkData.drinks[0].strDrink}></img>  }
                    <h3>Recipe</h3>
                    <p>{drinkData.drinks[0].strInstructions}</p>
                    <ButtonsWrapper>
                        <button onClick={() => history.push("./")}>Back Home</button>
                    </ButtonsWrapper>
            </DrinkDetails>
        ) ;  
    } else if(status === "loading"){
            return "Loading...";
    }
    else if (!drinkData || status === "error"){
        return "We don't know that drink (yet)";
    }
    /*
    const favoriteNames = favorite.map(favorite => favorite.strDrink)
    const isDrinkFavorite = drinkData && favoriteNames.includes(drinkData.drinks[0].strDrink);

    console.log(addFavorite(drinkData.[0].strDrink));

    <button onClick={
                    isDrinkFavorite
                    ? () => deleteFavorite(drinkData.drinks[0].strDrink) 
                    : () => addFavorite(drinkData)
                    }>
                    {isDrinkFavorite ? "Remove Fav" : "Add Fav"}
                </button> */
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
        width: 50%;
        }
    }
`

export default DrinkCard;
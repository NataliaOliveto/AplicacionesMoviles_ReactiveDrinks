import React from "react";
import { useHistory } from 'react-router';
import styled from "styled-components";

const SurpriseCard = ( { addFavorite, favorite, deleteFavorite } ) => {

    const [drinkData, setDrinkData] = React.useState();
    const history = useHistory();
    const [status, setStatus] = React.useState("idle");

    React.useEffect(() => {
        setStatus("loading")
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then((response) => response.json()
        .then((data) => {
            if(data.drinks === null){
                setStatus("error");
            } else {
                setDrinkData(data);
                setStatus("success");
            }
        }))
        .catch(error => setStatus("error"))
    }, []);

    const favoriteNames = favorite.map(favorite => favorite.strDrink)
    console.log(favoriteNames);

    const isDrinkFavorite = drinkData && favoriteNames.includes(drinkData.drinks[0].strDrink);

    if(drinkData && status === "success"){
        return (
            <DrinkDetails>
                    <h2>{drinkData.drinks[0].strDrink}</h2>
                    <h3>{drinkData.drinks[0].strAlcoholic} drink</h3>        
                    {<img src={drinkData.drinks[0].strDrinkThumb} alt={drinkData.drinks[0].strDrink}></img>}
                    <h3>↓ Recipe details ↓</h3>
                    <p>{drinkData.drinks[0].strInstructions}</p>                    
                    <ButtonsWrapper>
                        <button onClick={
                            isDrinkFavorite
                            ? () => deleteFavorite(drinkData.drinks[0].strDrink) 
                            : () => addFavorite(drinkData.drinks[0])
                            }>
                            {isDrinkFavorite ? "❤" : "♡"}
                        </button>                        
                        <button onClick={() => history.push("./")}>Back Home</button>
                    </ButtonsWrapper>
            </DrinkDetails>
        ) ;  
    } else if(status === "loading"){
        return (   
            <StateMessage>
                Loading...
            </StateMessage>             
        );
    }
    else if (!drinkData || status === "error"){
        return <StateMessage>
                    We don't know that drink (yet!)
                </StateMessage>
    }

};

const StateMessage = styled.div`
    margin-top: 50px;
    font-size: 30px;
    color: grey;
    text-align: center;
    background-color: white;
    animation-name: fadein;
    animation-duration: 0.5s;
    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }           
    }
`

const DrinkDetails = styled.div`
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1); 
    padding: 15px;
    text-align: justify;
    border-radius: 15px;
    margin: 30px;
    width: 500px;
    animation-name: fadein;
    animation-duration: 2s;

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

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }           
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
        width: 10%;
        font-size: 30px;
        border-radius: 70px;
        }
        &:last-child{
        width: 20%;
        }
    }
`

export default SurpriseCard;
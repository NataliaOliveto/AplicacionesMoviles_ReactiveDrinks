import React from "react";
import { useHistory } from 'react-router';
import styled from "styled-components";

const SurpriseCard = ( { addFavorite, favorite, deleteFavorite } ) => {

    const [drinkData, setDrinkData] = React.useState();
    const history = useHistory();
    const [status, setStatus] = React.useState("idle");
    const favoriteNames = favorite.map(favorite => favorite.strDrink);
    const isDrinkFavorite = drinkData && favoriteNames.includes(drinkData.drinks[0].strDrink);

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

    if(drinkData && status === "success"){
        return (
            <DrinkDetails>
                <CardTitle>
                    <h2>{drinkData.drinks[0].strDrink}</h2>
                    <button onClick={
                            isDrinkFavorite
                            ? () => deleteFavorite(drinkData.drinks[0].strDrink) 
                            : () => addFavorite(drinkData.drinks[0])
                            }>
                            {isDrinkFavorite ? "❤" : "♡"}
                    </button>
                </CardTitle>
                    <h3>{drinkData.drinks[0].strAlcoholic} drink</h3>        
                    {<img src={drinkData.drinks[0].strDrinkThumb} alt={drinkData.drinks[0].strDrink}></img>}
                    <h3>↓ Recipe details ↓</h3>
                    <p>{drinkData.drinks[0].strInstructions}</p>                    
                    <button onClick={() => history.push("./")}>Back Home</button>
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
        return (
            <StateMessage>
                An error ocurred. Please try again.
            </StateMessage>
        );
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
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

`

const DrinkDetails = styled.div`
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1); 
    padding: 15px;
    text-align: justify;
    border-radius: 15px;
    margin: 30px;
    margin-bottom: 0px;
    width: 500px;
    animation-name: fadein;
    animation-duration: 2s;
    
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

    p{
    width: 400px;
    padding: 0px 50px;
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

const CardTitle = styled.div`
    display: flex;
    align-items: center;  
    justify-content: center;
    h2 {
        font-size: 20px;
        color: white;
        background-color: #f1356d;
        border-radius: 10px;
        padding: 5px;
        text-align: center;
        width: 400px;
        margin-left: 50px;
    }

    button {
        background-color: #f1356d;
        color: #fff;
        padding: 5px;
        cursor: pointer;
        text-align: center;
        margin: 0;
        margin-left: 10px;
        cursor: pointer;
        transition: all ease-out 0.1s;
        width: 50px;
        font-size: 20px;    
        border: 0;
        border-radius: 70px;

        &:hover {
            transform: translateY(-2px);
            font-weight: 600;
            }
        }
`

export default SurpriseCard;
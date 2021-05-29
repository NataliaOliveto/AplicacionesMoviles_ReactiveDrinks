import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router';

export const FavoritesCard = ( { addFavorite, favorite, deleteFavorite} ) => {

  const favoriteNames = favorite.map((favorite) => favorite.strDrink);
  const history = useHistory();
  
  const handleSetFavorite = (eachDrink) => {
    if (favoriteNames.includes(eachDrink.strDrink)) {
      deleteFavorite(eachDrink.strDrink);
    } else {
      addFavorite(eachDrink);
    }
  };

  if (favorite.length > 0) {
    return (
      <Results>
        <h2>Your favorites: </h2>
        {favorite.map((eachDrink, i) => (
          <DrinkDetails key={i}>
            <CardTitle>
              <h2>{eachDrink.strDrink}</h2>
              <button onClick={() => handleSetFavorite(eachDrink)}>
                {favoriteNames.includes(eachDrink.strDrink) ? "❤" : "♡"}
              </button>
            </CardTitle>
              <h3>{eachDrink.strAlcoholic} | {eachDrink.strCategory}</h3>
              {<img src={eachDrink.strDrinkThumb} alt={eachDrink.strDrink}></img>}
              <h3>↓ Recipe details ↓</h3>
              <p>{eachDrink.strInstructions}</p>
          </DrinkDetails>
        ))}
      </Results>
    );
  } else {
    return (
      <StateMessage>
        No favorites yet<br />Go back and give some ❤
        <button onClick={() => history.push("./")}>Back Home</button>
      </StateMessage>
    )
  }
};

const Results = styled.div`

  h2 {
    font-size: 15px;
    color: grey;
    padding: 20px;
    text-align: left;
    border-bottom: 1px solid #f2f2f2;
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

const DrinkDetails = styled.div`
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: justify;
  border-radius: 15px;
  margin: 30px;
  width: 500px;
  animation-name: fadein;
  animation-duration: 2s;  

  h3 {
    font-size: 15px;
    color: #f1356d;
    text-align: center;
    margin: 10px;
  }

  img {
    width: 180px;
    height: 250px;
    display: block;
    margin: auto;
    border-radius: 10px;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  p{
    width: 400px;
    padding: 0px 50px;
  }

`

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
        margin-top: 20px;
        cursor: pointer;
        transition: all ease-out 0.1s;
        &:hover {
        filter: brightness(1.20);
        transform: translateY(2px);        
        font-weight: 600;
        }
    }
`;

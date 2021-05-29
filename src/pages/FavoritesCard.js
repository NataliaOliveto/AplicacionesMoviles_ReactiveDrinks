import React from "react";
import styled from "styled-components";

export const FavoritesCard = ( {addFavorite, favorite, deleteFavorite} ) => {

  const favoriteNames = favorite.map((favorite) => favorite.strDrink);

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
            <h2>{eachDrink.strDrink}</h2>
            <h3>
              {eachDrink.strAlcoholic} | {eachDrink.strCategory}
            </h3>
            {<img src={eachDrink.strDrinkThumb} alt={eachDrink.strDrink}></img>}
            <h3>↓ Recipe details ↓</h3>
            <p>{eachDrink.strInstructions}</p>
            <button onClick={() => handleSetFavorite(eachDrink)}>
              {favoriteNames.includes(eachDrink.strDrink) ? "❤" : "♡"}
            </button>
          </DrinkDetails>
        ))}
      </Results>
    );
  } else {
    return <StateMessage>NO TENES FAVORITOS...</StateMessage>;
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
`;
const DrinkDetails = styled.div`
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: justify;
  border-radius: 15px;
  margin: 30px;
  width: 500px;
  animation-name: fadein;
  animation-duration: 2s;

  h2 {
    font-size: 20px;
    color: white;
    background-color: #f1356d;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
    margin-bottom: 10px;
  }

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
    text-align: center;
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

  button {
    background-color: #f1356d;
    color: #fff;
    border: 0;
    padding: 5px;
    cursor: pointer;
    display: block;
    margin: auto;
    text-align: center;
    margin-top: 8px;
    cursor: pointer;
    transition: all ease-out 0.1s;
    width: 10%;
    font-size: 30px;
    border-radius: 70px;

    &:hover {
      filter: brightness(1.2);
      transform: translateY(2px);
      font-weight: 600;
    }
  }
`;

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
`;

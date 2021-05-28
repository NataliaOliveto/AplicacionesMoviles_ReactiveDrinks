import React from "react";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'

const AlcoholicList = ( { drink } ) => {
    const [drinkData, setDrinkData] = React.useState();
    console.log(drink)
    React.useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then((response) => response.json()
        .then((data) => setDrinkData(data)))
    }, [drink]);



    if(drinkData){
        console.log(drinkData);
        console.log(drinkData.drinks[0].strDrink);
        console.log(drinkData.drinks.length);
                
        if (drinkData.drinks.length > 1){
            for(let i = 0; i < drinkData.drinks.length ; i++)  {
                console.log(drinkData.drinks[i].strDrink);
            }
        }        

        return(
            <div className="blog-list">
                {drinkData.drinks.map(blog => (
                <div className="blog-preview" key={blog.idDrink} >

                    <h2>{ blog.strDrink }</h2>
                    <p>Written by { blog.strCategory }</p>

                </div>
                ))}
            </div>

        );
    } else {
        return (
            <div>
                <h3>Alcoholic drinks list</h3>
                    <ul>
    
                    </ul>
            </div>
        )
    }
    
    
}

export default AlcoholicList;
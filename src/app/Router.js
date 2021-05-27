import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import DrinkCard from '../pages/DrinkCard';
import Home from '../pages/Home';
import SurpriseCard from "../pages/SurpriseCard";

const Router = () => {

    const [drink, setDrink] = React.useState();
    const [favorite, setFavorite] = React.useState([]);

    function handleSetDrink(drink) {
        setDrink(drink);
    }

    function handleAddFavorite(drink){
        setFavorite((oldFavorite) => [...oldFavorite, drink]);
    }

    function deleteFavorite(drinkName){
        setFavorite(favorite.filter((favorite) => favorite.strDrink !== drinkName));
    }

    return (
    <div className="content">
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home setDrink={handleSetDrink}/>
                </Route>
        
                <Route path="/card">
                    <DrinkCard 
                    drink={drink} 
                    addFavorite={handleAddFavorite}
                    favorite={favorite}
                    deleteFavorite = {deleteFavorite}/>
                </Route>

                <Route path="/surprisecard">
                    <SurpriseCard 
                    random={true}/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
    );
};

export default Router;
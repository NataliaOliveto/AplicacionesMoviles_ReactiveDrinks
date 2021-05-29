import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import DrinkCard from '../pages/DrinkCard';
import Home from '../pages/Home';
import SurpriseCard from "../pages/SurpriseCard";
import NotFound from "../pages/NotFound";
import Navbar from "./Navbar";
import { FavoritesCard } from "../pages/FavoritesCard"

const Router = () => {

    const [drink, setDrink] = React.useState();
    const [favorite, setFavorite] = React.useState(() => {
        try{
            const prueba23 = localStorage.getItem('favorite')
            return prueba23 ? JSON.parse(prueba23) : []
        }catch(error){
            console.error(error)
        }
    });

    function handleSetDrink(drink) {
        setDrink(drink);
    }

    function storage(favorite){
        if(favorite){     
            localStorage.setItem('favorite', JSON.stringify(favorite)); 
        }
    } 

    function handleAddFavorite(drink){
        setFavorite((oldFavorite) => [...oldFavorite, drink]);       
    }

    function deleteFavorite(drinkName){
        setFavorite(favorite.filter((favorite) => favorite.strDrink !== drinkName));
    }

    React.useEffect(() => {
        storage(favorite);
    }, [favorite]);

    return (
    <div className="content">
        <BrowserRouter>
        <div>
        <Navbar />
        <div>
            <Switch>
                <Route exact path="/">
                    <Home setDrink={handleSetDrink}/>
                </Route>
        
                <Route path="/card">
                <DrinkCard 
                    drink={drink}
                    addFavorite={handleAddFavorite}
                    favorite={favorite}
                    deleteFavorite = {deleteFavorite}
                    />
                </Route>

                <Route path="/favorites">
                <FavoritesCard 
                    addFavorite={handleAddFavorite}
                    favorite={favorite}
                    deleteFavorite = {deleteFavorite}
                    />
                </Route>

                <Route path="/surprisecard">
                    <SurpriseCard
                    addFavorite={handleAddFavorite}
                    favorite={favorite}
                    deleteFavorite = {deleteFavorite}
                    />
                </Route>

                <Route path="*">
                    <NotFound />
                </Route>
            </Switch></div></div>
        </BrowserRouter>
    </div>
    );
};

export default Router;
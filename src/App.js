import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
const APP_ID = 'a0c38c55';
const APP_KEY = "2aa00c3874bf9593f1edc2c1e0bcaf56";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState("chicken");


useEffect( () => {
  getRecipes();
}, [query]);

const getRecipes = async () => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  //setSearch('');
}

  return(
    <div className="App">
      <h1 className="heading">Amon's Food Recipes</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" placeholder="Type here...." type="text" onChange={updateSearch} value={search}/>
        <button className="search-btn" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
      ))}
      </div>
    </div>
  );
};

export default App;

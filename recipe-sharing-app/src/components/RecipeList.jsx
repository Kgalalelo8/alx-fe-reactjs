import {useRecipeStore} from './components/recipeStore';

const RecipeList = ()=> {
    const recipes = useRecipeStor(state => state.recipes);

    return (
        <div> 
            {recipes.map(recipe => (<div key ={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>recipe.description}</p>
                </div>
    ))}
    </div>

    );
};
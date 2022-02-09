import * as model from './model';
import recipeView from './views/recipeView';

import 'core-js/stable';

const recipeContainer = document.querySelector('.recipe');

const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);
    if(!id) return
    
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);

  } catch(err) {
    console.error(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function() {
  try {
    await model.loadSearchResults('pizza')
    console.log(model.state.search.results)
  } catch (err) {
    console.error(err)
  }
}

controlSearchResults()

const init = function() {
  recipeView.addHandlerRender(controlRecipes)
}
init();


// =====================
// 10-25-18 jl added to MAIN.JSON
// ======================
'use strict';

var allRecipes = [];

var RecipesConstructor = function(name, servings, course){
  this.name = name;
  this.servings = servings;
  this.course = course;
  this.ingredients = [];
  allRecipes.push(this);
};

var IngredientsConstructor = function (name, qty, measurementunit, location) {
  this.name = name;
  this.quantity = qty;
  this.measurementunit = measurementunit;
  this.location = location;
};

RecipesConstructor.prototype.ingredientsArrayCreator = function (name, qty, measurementunit, location) {
  var ingredOne = new IngredientsConstructor (name, qty, measurementunit, location);
  this.ingredients.push(ingredOne);
};

var Menu = function(recipe) {
  // this.recipe is an array of menuItem instances.
  this.recipe = recipe;
};
Menu.prototype.addItem = function(name, course, servings) {
  var newItems = new MenuItem(name, course, servings);
  this.recipe.push(newItems);
};

Menu.prototype.removeItem = function(prod) {
  for (var i = 0; i < this.recipe.length; i++) {
    if (this.recipe[i].name === prod) {
      this.recipe.splice(i,1);
    }
  }
};

var MenuItem = function(name, course, servings) {
  this.name = name;
  this.course = course;
  this.servings = servings;
};

//removed because erin got her save to storage a different way
Menu.prototype.saveToLocalStorage = function() {
  localStorage.setItem('menu', JSON.stringify(this.recipe));
};

// var saveToLocalStorage = function() {
//   var saveRecipe = JSON.stringify(side1);
//     sideButton1.setAttribute('class', 'selected');
//     localStorage.setItem('side-dish-1', saveRecipe);

// }


// RecipesConstructor.prototype.ingredientsArrayCreator = function (name, qty, measurementunit, location) {
//   var ingredOne = new IngredientsConstructor (name, qty, measurementunit, location);
//   this.ingredients.push(ingredOne);
// };

// var recipeOne = new RecipesConstructor ('MJ Mulled Cider', 8, 'Drinks');
// recipeOne.ingredientsArrayCreator ('Apple juice', .5,'Gallon', 'Juices');
// recipeOne.ingredientsArrayCreator ('Cider spice', .25,'cup', 'Spices');
// =====================
// 
// ======================

/*
10-25-18 
 note to self: 
-need to fix the css refs in about/list/menu htmls
-don't touch index.html until saturday/after erin has pushed/merge, she is doing a bunch of updates in it
-my homework to finish before saturday is to build the side dishes objects
-homework for end of day saturday is render my menu list and have the remove function working (includes removing it from local storage (which might be it;s own function like the busmall shopping cart))
*/

/*
example format for obj creation
var recipeOne = new RecipesConstructor ('MJ Mulled Cider', 8, 'Drinks');
recipeOne.ingredientsArrayCreator ('Apple juice', .5,'Gallon', 'Juices');
recipeOne.ingredientsArrayCreator ('Cider spice', .25,'cup', 'Spices');
*/

//var template = new RecipesConstructor ('name', # of servings, Category)
//template.ingredientsArrayCreator ('name', measurement (#) ,'measurement type', 'store isle');
/*
Here is the list of courses for the building of recipes... Appetizer, Main Dish, Side Dish, Dessert, Beverage (don't make them plural)

Array for Grocery Department = ['Spices', 'Nuts', 'Dairy', 'Condiments', 'Produce', 'Other-Grocery', 'Baking', 'Meat', 'Frozen', 'Juice & Beverages', 'Wine & Liquor']

Questions and concerns: 
-when ingredients without measurements, like "Kosher salt", do i omit, do i enter and just put in something of my choice, etc 
we can't do a 'contains' function because there is a diff of cranberries and dried cranberries
*/

/*10-27-18 jl added my own things for adding it to storage so i could test for remove from storage*/

// =====================
// 
// ======================
var recipeCranCornStuffing = new RecipesConstructor ('Cranberry Cornbread Stuffing', 10, 'Side Dish');
recipeCranCornStuffing.ingredientsArrayCreator ('Olive oil', 1, 'tsp', 'Baking');
recipeCranCornStuffing.ingredientsArrayCreator ('Italian sausage', 1, 'lb', 'Meat');
recipeCranCornStuffing.ingredientsArrayCreator ('Unsalted butter', 2, 'tbsp', 'Dairy');
recipeCranCornStuffing.ingredientsArrayCreator ('Celery stalk', 2, 'each', 'Produce');
recipeCranCornStuffing.ingredientsArrayCreator ('Yellow onion', .5, 'each', 'Produce');
recipeCranCornStuffing.ingredientsArrayCreator ('Tart apple', 1, 'each', 'Produce');
recipeCranCornStuffing.ingredientsArrayCreator ('dried sage leaves', .5, 'tsp', 'Spices');
recipeCranCornStuffing.ingredientsArrayCreator ('black pepper', .5, 'tsp', 'Spices');
recipeCranCornStuffing.ingredientsArrayCreator ('Low-sodium chicken broth', 1.5, 'cup', 'Other-Grocery');
recipeCranCornStuffing.ingredientsArrayCreator ('Egg', 1, 'each', 'Dairy');
recipeCranCornStuffing.ingredientsArrayCreator ('Dried cranberries', .5, 'cup', 'Other-Grocery');
recipeCranCornStuffing.ingredientsArrayCreator ('STOVE TOP Cornbread Stuffing Mix (6 oz.)', 1, 'each', 'Other-Grocery');
recipeCranCornStuffing.ingredientsArrayCreator ('fresh sage leaves', 1, 'each', 'Produce'); //fresh sage leaves for garnish, should i have left this one off?

//================================
var recipeMashPotatCarmShallots = new RecipesConstructor ('Mashed Potatoes with Caramelized Shallots', 8, 'Side Dish');
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Extra-virgin olive oil', 2, 'tbs', 'Baking');
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Shallots', 2, 'cup', 'Produce');
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Kosher salt', 1, 'each', 'Spices'); //Kosher salt, no measurements
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Yukon Gold potatoes', 4, 'lb', 'Produce');
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Unsalted butter', 1, 'cup', 'Dairy');
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Crème fraîche', 1, 'cup', 'Dairy');
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Whole milk', .5, 'cup', 'Dairy');
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Freshly ground black pepper', 1, 'each', 'Spices');

//================================
//http://yestoyolks.com/2014/01/06/roasted-brussels-sprouts-with-balsamic-caramelized-onions-bacon/ 
//link didn't work, even when i googled
var recipeRoastedBrussOnionBacon = new RecipesConstructor ('Roasted Brussels Sprouts with Balsamin Carmelized Onions & Bacon', 4, 'Side Dish');
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Brussel Sprouts', 4, 'cup', 'Produce');
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Bacon', 4, 'each', 'Meat');
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Butter', 1, 'tbsp', 'Dairy');
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Onion', 1, 'each', 'Produce');
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Red pepper flakes', 1, 'each', 'Spices'); //it was 1 pinch
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Sugar', 2, 'tsp', 'Baking');
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Balsamic vinegar', .5, 'cup', 'Baking');
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Salt', 1, 'each', 'Spices'); //was to taste
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Pepper', 1, 'each', 'Spices'); //was to taste

//================================
var recipeUltGreenBeanCass = new RecipesConstructor ('The Ultimate Homemade Green Bean Casserole Recipe', 8, 'Side Dish');
recipeUltGreenBeanCass.ingredientsArrayCreator ('shallots', 1, 'lb', 'Produce');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Canola oil', 2, 'cup', '');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Kosher salt', 1, 'each', 'Spices');
recipeUltGreenBeanCass.ingredientsArrayCreator ('White button mushroom', .5, 'lb', 'Produce');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Soy sauce', 2, 'tsp', 'Condiments');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Lemon juice', 2, 'tsp', 'Produce');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Low-sodium chicken broth', 2, 'cup', 'Other-Grocery');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Heavy cream', 1.5, 'cup', 'Dairy');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Butter', 2, 'tbsp', 'Dairy');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Garlic', 2, 'each', 'Produce'); //2 cloves
recipeUltGreenBeanCass.ingredientsArrayCreator ('Flour', .25, 'cup', 'Baking');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Pepper', 1, 'each', 'Spices'); //Freshly ground black pepper
recipeUltGreenBeanCass.ingredientsArrayCreator ('Green beans', 2, 'lb', 'Produce');

//================================
var recipeOrngMapleCran = new RecipesConstructor ('Orange Maple Cranberry Sauce', 6, 'Side Dish');
recipeOrngMapleCran.ingredientsArrayCreator ('Frozen cranberries', 3, 'cup', 'Frozen');
recipeOrngMapleCran.ingredientsArrayCreator ('Pure maple syrup', .33, 'cup', 'Condiments');
recipeOrngMapleCran.ingredientsArrayCreator ('orange zest', 1, 'tbsp', 'Produce');
recipeOrngMapleCran.ingredientsArrayCreator ('fresh orange juice', .5, 'cup', 'Juice & Beverages');
recipeOrngMapleCran.ingredientsArrayCreator ('Cinnamon stick', 1, 'each', 'Spices');
//omitted: 1/2 cup water

//================================
var recipeCreamCorn = new RecipesConstructor ('Creamed Corn', 4, 'Side Dish');
recipeCreamCorn.ingredientsArrayCreator ('frozen corn', 10, 'oz', 'Frozen');
recipeCreamCorn.ingredientsArrayCreator ('Butter', 3, 'tbsp', 'Dairy');
recipeCreamCorn.ingredientsArrayCreator ('Flour', 3, 'tbsp', 'Baking');
recipeCreamCorn.ingredientsArrayCreator ('Milk', 2, 'cup', 'Dairy');
recipeCreamCorn.ingredientsArrayCreator ('Sugar', 2, 'tbsp', 'Spices');
//omitted: water, for cooking corn

// ======================
// 
// ======================


//make table for menu html page

var showMenuTable = function() {
  var tableContainer = document.getElementById('menu-list');
  //make header of table
  var headerTrEl = document.createElement('tr');

  var headElOne = document.createElement('th');
  headElOne.textContent = 'REMOVE';
  var headElTwo = document.createElement('th');
  headElTwo.textContent = 'RECIPE';
  var headElThree = document.createElement('th');
  headElThree.textContent = 'COURSE';
  var headElFour = document.createElement('th');
  headElFour.textContent = '# OF SERVINGS';

  headerTrEl.appendChild(headElOne);
  headerTrEl.appendChild(headElTwo);
  headerTrEl.appendChild(headElThree);
  headerTrEl.appendChild(headElFour);

  tableContainer.appendChild(headerTrEl);

  //makes table details
  //will have to adjust the length based on what is in the local storage
  for (var i = 0; i < menu.recipe.length; i++){

    var trEl = document.createElement('tr');
    var tdLinkEl = document.createElement('td');
    tdLinkEl.textContent = ('X');
    tdLinkEl.classList.add('removelistitem');
    tdLinkEl.id= menu.recipe[i].name;


    var tdRecipeEl = document.createElement('td');
    tdRecipeEl.textContent = menu.recipe[i].name;

    var tdCourseEl = document.createElement('td');
    tdCourseEl.textContent = menu.recipe[i].course;

    var tdServEl = document.createElement('td');
    tdServEl.textContent = menu.recipe[i].servings;

    trEl.appendChild(tdLinkEl);
    trEl.appendChild(tdRecipeEl);
    trEl.appendChild(tdCourseEl);
    trEl.appendChild(tdServEl);
    tableContainer.appendChild(trEl);
  }
};

//i tem put in menu so i could test (i wrote menu as the thing to add it to local storage)
//so each recipe is 
var loadMenuTable = function() {
  var menuItems = JSON.parse(localStorage.getItem('menu')) || [];
  menu = new Menu(menuItems);
};

var clearMenuTable = function() {
  var rowToDelete = document.querySelectorAll('#menu-list tr');
  for (var i = 0; i <= rowToDelete.length; i++) {
    if (rowToDelete[i]) {
      rowToDelete[i].remove();
    }
  }
};


//remove from local storage, erin says she's putting in the full obj

var renderMenuTable = function() {
  loadMenuTable();
  clearMenuTable();
  showMenuTable();
};

//might need to change the remove based on how it was entered into local storage
function removeItemFromMenu(event) {
  if(event.target.classList.contains('removelistitem')) {
    menu.removeItem(event.target.id);
    menu.saveToLocalStorage();
    renderMenuTable();
  }
}

var menuclick = document.getElementById('menu-list');
menuclick.addEventListener('click', removeItemFromMenu);
//var menu;


var menu = new Menu([]);

var allRecipeHTMLIds = ['main-dish-1','main-dish-2','main-dish-3','appetizer-1','appetizer-2','appetizer-3','side-dish-1','side-dish-2','side-dish-3','dessert-1','dessert-2','dessert-3','beverage-1','beverage-2','beverage-3'];
//console.log(JSON.parse(localStorage.getItem(allRecipeHTMLIds[0])) !== null);
//console.log(JSON.parse(localStorage.getItem(allRecipeHTMLIds[0])));

var temp;
//var temp= JSON.parse(localStorage.getItem(allRecipeHTMLIds[0]));
//console.log(temp);
//console.log(temp.name);
for (var p= 0; p < allRecipeHTMLIds.length; p++) {
  //console.log('in for loop');
  //console.log('obj in for loop ' + JSON.parse(localStorage.getItem(allRecipeHTMLIds[p])));
  temp = JSON.parse(localStorage.getItem(allRecipeHTMLIds[p]));
  if(temp !== null) {
    menu.addItem(temp.name, temp.course, temp.servings);
    //console.log(menu);
  }
}

menu.saveToLocalStorage();

renderMenuTable();

//button to take you back to add recipes
var moreRecipeButtonHandler = function(event){
  event.preventDefault();
  console.log('in more recipe handler');
  //var moreRecipeButtonDom = document.getElementById('goback');
  location.href = 'index.html';
};

var moreRecipeButton = document.getElementById('goback');
moreRecipeButton.addEventListener('click', moreRecipeButtonHandler);


//button to take you to shopping list
var shoppingListButtonHandler = function(event){
  event.preventDefault();
  console.log('in shopping list handler');
  //var moreRecipeButtonDom = document.getElementById('buildshop');
  location.href = 'list.html';
};

var shoppingListButton = document.getElementById('buildshop');
shoppingListButton.addEventListener('click', shoppingListButtonHandler);


// ======================
// 
// ======================
//helping write the code for side dishes buttons
/*example
var main1ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('main-dish-1')) {
    localStorage.removeItem('main-dish-1');
    mainButton1.setAttribute('class', '');
    console.log(mainButton1);
  } else if(event.target.id === 'main-dish-1'){
    var saveRecipe = JSON.stringify(main1);
    // console.log(saveRecipe);
    mainButton1.setAttribute('class', 'selected');
    console.log(mainButton1);
    localStorage.setItem('main-dish-1', saveRecipe);
  }
};

var mainButton1 = document.getElementById('main-dish-1');
mainButton1.addEventListener('submit', main1ButtonClickHandler);
*/

// //julie testing for making it a loop instead of all the individual code
// //julie didn't finish, wasn't sure about passing in buttonName
// var allRecipeHTMLIds = ['main-dish-1','main-dish-2','main-dish-3','appetizer-1','appetizer-2','appetizer-3','side-dish-1','side-dish-2','side-dish-3','dessert-1','dessert-2','dessert-3','beverage-1','beverage-2','beverage-3'];

// var main1ButtonClickHandler = function(buttonName, event){
//   for ( var t = 0; t < allRecipes.length; t++) {
//     for (var w = 0; w < allRecipeHTMLIds.length; w++) {
//       event.preventDefault();
//       // console.log(event);
//       if (localStorage.getItem(allRecipeHTMLIds[w])) {
//         localStorage.removeItem(allRecipeHTMLIds[w]);
//         buttonName.setAttribute('class', '');
//         console.log(buttonName);
//       } else if(event.target.id === allRecipeHTMLIds[w]){
//         var saveRecipe = JSON.stringify(allRecipes[t]);
//         // console.log(saveRecipe);
//         buttonName.setAttribute('class', 'selected');
//         console.log(buttonName);
//         localStorage.setItem(allRecipeHTMLIds[w], saveRecipe);
//       }
//     }
//   }
// };

// var main1Button = document.getElementById('main-dish-1');
// main1Button.addEventListener('submit', main1ButtonClickHandler(main1Button));

// var main2Button = document.getElementById('main-dish-2');
// main2Button.addEventListener('submit', main2ButtonClickHandler(main2Button));


//julie testing for making it a loop instead of all the individual code

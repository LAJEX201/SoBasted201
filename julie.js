// var saveToLocalStorage = function() {
//   var saveRecipe = JSON.stringify(side1);
//     sideButton1.setAttribute('class', 'selected');
//     localStorage.setItem('side-dish-1', saveRecipe);

/*
Here is the list of courses for the building of recipes... Appetizer, Main Dish, Side Dish, Dessert, Beverage (don't make them plural)

Array for Grocery Department = ['Spices', 'Nuts', 'Dairy', 'Condiments', 'Produce', 'Other-Grocery', 'Baking', 'Meat', 'Frozen', 'Juice & Beverages', 'Wine & Liquor']

Questions and concerns: 
-when ingredients without measurements, like "Kosher salt", do i omit, do i enter and just put in something of my choice, etc 
-we can't do a 'contains' function because there is a diff of cranberries and dried cranberries
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
// ======================
//    code from main js to can test
// ======================


// ======================
//    code to move to main.js
// ======================

//Menu object contructor
var Menu = function(recipe) {
  //this will be an array of receipes
  this.recipe = recipe;
};

//adds recipes to the Menu obj's array
Menu.prototype.addItem = function(name, course, servings, ingredients, localName) {
  var newItems = new MenuItem(name, course, servings, ingredients, localName);
  this.recipe.push(newItems);
};

//removes recipes to the Menu obj's array
Menu.prototype.removeItem = function(prod) {
  //this searches the array for the name of the one you want to delete so you know when/where to splice
  for (var i = 0; i < this.recipe.length; i++) {
    if (this.recipe[i].name === prod) {
      //console.log(this.recipe[i].localName);
      localStorage.removeItem(this.recipe[i].localName);
      this.recipe.splice(i,1);
      //localStorage.removeItem(prod); prod is the name of the recipe, not the local storage name
    }
  }
};

//Menu items obj constructor
//need to change to hold the ingredients for math function
var MenuItem = function(name, course, servings, ingredients, localName) {
  this.name = name;
  this.course = course;
  this.servings = servings;
  this.ingredients = ingredients;
  this.localName = localName;
};

//stil keep this save to storage even thought we have erins because i put them into a menu array 
Menu.prototype.saveToLocalStorage = function() {
  localStorage.setItem('menu', JSON.stringify(this.recipe));
};

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
  for (var i = 0; i < menu.recipe.length; i++){

    //makes the x for delete
    var trEl = document.createElement('tr');
    var tdLinkEl = document.createElement('td');
    tdLinkEl.textContent = ('X');
    tdLinkEl.classList.add('removelistitem');
    tdLinkEl.id= menu.recipe[i].name;

    //makes the name of recipe
    var tdRecipeEl = document.createElement('td');
    tdRecipeEl.textContent = menu.recipe[i].name;

    //makes the course name
    var tdCourseEl = document.createElement('td');
    tdCourseEl.textContent = menu.recipe[i].course;

    //makes the servings per recipe
    var tdServEl = document.createElement('td');
    tdServEl.textContent = menu.recipe[i].servings;

    trEl.appendChild(tdLinkEl);
    trEl.appendChild(tdRecipeEl);
    trEl.appendChild(tdCourseEl);
    trEl.appendChild(tdServEl);
    tableContainer.appendChild(trEl);
  }
};

//items put in Menu obj array so i could test (i wrote menu as the thing to add it to local storage)
var loadMenuTable = function() {
  var menuItems = JSON.parse(localStorage.getItem('menu')) || [];
  menu = new Menu(menuItems);
};

//deletes all the rows in the table (but doesn't delete the header)
var clearMenuTable = function() {
  var rowToDelete = document.querySelectorAll('#menu-list tr');
  for (var i = 0; i <= rowToDelete.length; i++) {
    if (rowToDelete[i]) {
      rowToDelete[i].remove();
    }
  }
};

var renderMenuTable = function() {
  loadMenuTable();
  clearMenuTable();
  showMenuTable();
};

//might need to change the remove based on how it was entered into local storage
//need to adj so it ALSO removes erin's local storage (might be done here, or will be done in menu.removeItem)
function removeItemFromMenu(event) {
  if(event.target.classList.contains('removelistitem')) {
    menu.removeItem(event.target.id);
    menu.saveToLocalStorage();
    renderMenuTable();
  }
}
var menuclick = document.getElementById('menu-list');
menuclick.addEventListener('click', removeItemFromMenu);

var menu = new Menu([]);

//these localstorage names
var allRecipeHTMLIds = ['main-dish-1','main-dish-2','main-dish-3','appetizer-1','appetizer-2','appetizer-3','side-dish-1','side-dish-2','side-dish-3','dessert-1','dessert-2','dessert-3','beverages-1','beverages-2','beverages-3'];

//var parsedRecipeFromLocStor;
//testing if i put it in the for loop so it doesn't have to be global
for (var p= 0; p < allRecipeHTMLIds.length; p++) {
  var parsedRecipeFromLocStor = JSON.parse(localStorage.getItem(allRecipeHTMLIds[p]));
  //console.log(allRecipeHTMLIds[p]);
  if(parsedRecipeFromLocStor !== null) {
    menu.addItem(parsedRecipeFromLocStor.name, parsedRecipeFromLocStor.course, parsedRecipeFromLocStor.servings, parsedRecipeFromLocStor.ingredients,allRecipeHTMLIds[p]);
  }
}
menu.saveToLocalStorage();
renderMenuTable();

//button to take you back to add recipes
var moreRecipeButtonHandler = function(event){
  event.preventDefault();
  //console.log('in more recipe handler');
  //var moreRecipeButtonDom = document.getElementById('goback');
  location.href = 'index.html';
};
//note: will need to add this ID to the button on menu.html
var moreRecipeButton = document.getElementById('goback');
moreRecipeButton.addEventListener('click', moreRecipeButtonHandler);


//button to take you to shopping list
var shoppingListButtonHandler = function(event){
  event.preventDefault();
  //console.log('in shopping list handler');
  //var moreRecipeButtonDom = document.getElementById('buildshop');
  location.href = 'list.html';
};
//note: will need to add this ID to the button on menu.html
var shoppingListButton = document.getElementById('buildshop');
shoppingListButton.addEventListener('click', shoppingListButtonHandler);




'use strict';

//javascript for menu HTML. Collects recipes from local storage, puts them in an array, removes it from local storage if selected, render a table to the page of selected recipes, and click handlers for buttons that take you back to INDEX or to move you onto to ingredients page

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
      localStorage.removeItem(this.recipe[i].localName);
      this.recipe.splice(i,1);
    }
  }
};

//Menu items obj constructor
var MenuItem = function(name, course, servings, ingredients, localName) {
  this.name = name;
  this.course = course;
  this.servings = servings;
  this.ingredients = ingredients;
  this.localName = localName;
};

//saves recipes in local storage in an array
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

//removes from local storage (array and the individual recipe)
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

//these are localstorage names
var allRecipeHTMLIds = ['appetizer-1','appetizer-2','appetizer-3','main-dish-1','main-dish-2','main-dish-3','side-dish-1','side-dish-2','side-dish-3','dessert-1','dessert-2','dessert-3','beverages-1','beverages-2','beverages-3'];

//var parsedRecipeFromLocStor;
for (var p= 0; p < allRecipeHTMLIds.length; p++) {
  var parsedRecipeFromLocStor = JSON.parse(localStorage.getItem(allRecipeHTMLIds[p]));
  if(parsedRecipeFromLocStor !== null) {
    menu.addItem(parsedRecipeFromLocStor.name, parsedRecipeFromLocStor.course, parsedRecipeFromLocStor.servings, parsedRecipeFromLocStor.ingredients,allRecipeHTMLIds[p]);
  }
}
menu.saveToLocalStorage();
renderMenuTable();

//button to take you back to add recipes
var moreRecipeButtonHandler = function(event){
  event.preventDefault();
  location.href = 'index.html';
};
var moreRecipeButton = document.getElementById('goback');
moreRecipeButton.addEventListener('click', moreRecipeButtonHandler);


//button to take you to shopping list
var shoppingListButtonHandler = function(event){
  event.preventDefault();
  location.href = 'list.html';
};
var shoppingListButton = document.getElementById('buildshop');
shoppingListButton.addEventListener('click', shoppingListButtonHandler);

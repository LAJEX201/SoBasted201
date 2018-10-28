'use strict';

var allRecipes = [];

var RecipesConstructor = function(name, servings, course){
  this.name = name;
  this.servings = servings;
  this.course = course;
  this.ingredients = [];
  allRecipes.push(this);
};

var IngredientBuilder = function(name, quantity, unitOfMeasure, storeDepartment, location){
  this.name = name;
  this.quantity = quantity;
  this.unitOfMeasure = unitOfMeasure;
  this.storeDepartment = storeDepartment;
  location.ingredients.push(this);
};

var cider = new RecipesConstructor('MJ\'s Mulled Cider', 8, 'beverages');
var ciderIngre = new IngredientBuilder('Apple Juice', 0.5, 'gallon', 'juice',cider);
ciderIngre = new IngredientBuilder('Cider Mate Mulling Spice', 0.25, 'cup', 'spices', cider);
var sangria = new RecipesConstructor('Apple Cider Autumn Sangria', 6, 'beverages');
var sangriaIngre = new IngredientBuilder('cinnamon sticks', 2, 'each', 'spices',sangria);
sangriaIngre = new IngredientBuilder('medium pear', 1, 'each', 'produce', sangria);
sangriaIngre = new IngredientBuilder('medium orange', 1, 'each', 'produce', sangria);
sangriaIngre = new IngredientBuilder('pomegranate seeds', 0.666, 'cup', 'produce', sangria);
sangriaIngre = new IngredientBuilder('bottle white wine', 1, 'bottle', 'liquor', sangria);
sangriaIngre = new IngredientBuilder('apple cider', 2, 'cup', 'juice', sangria);
sangriaIngre = new IngredientBuilder('brandy', 0.5, 'cup', 'liquor', sangria);
sangriaIngre = new IngredientBuilder('orange juice', 0.25, 'juice', 'juice', sangria);
sangriaIngre = new IngredientBuilder('lemon juice', 2, 'tablespoon', 'produce', sangria);
sangriaIngre = new IngredientBuilder('club soda', 1, 'serving', 'juice', sangria);
var punch = new RecipesConstructor('Lusious Slush Punch', 24, 'beverages');
var punchIngre = new IngredientBuilder('white sugar', 2.5, 'cup', 'baking', punch);
punchIngre = new IngredientBuilder('lemon juice', 0.666, 'cup', 'produce', punch);
punchIngre = new IngredientBuilder('orange juice', 1, 'quart', 'juice', punch);
punchIngre = new IngredientBuilder('lemon-lime flavored carbonated beverage', 2, '2-liter bottles', 'juice', punch);
punchIngre = new IngredientBuilder('strawberry flavored mix', 6, 'ounces', 'baking', punch);
punchIngre = new IngredientBuilder('canned pineapple juice', 46, 'fluid ounces', 'juice', punch);
var pecans = new RecipesConstructor('Spiced Pecans', 16, 'appetizers');
var pecanIngre = new IngredientBuilder('salt', 4, 'teaspoon', 'spices', pecans);
pecanIngre = new IngredientBuilder('cayeene', 0.5, 'teaspoon', 'spices', pecans);
pecanIngre = new IngredientBuilder('white pepper', 1, 'teaspoon', 'spices', pecans);
pecanIngre = new IngredientBuilder('nutmeg', 1, 'teaspoon', 'spices', pecans);
pecanIngre = new IngredientBuilder('cloves', 1, 'teaspoon', 'spices', pecans);
pecanIngre = new IngredientBuilder('allspice', 1, 'teaspoon', 'spices', pecans);
pecanIngre = new IngredientBuilder('pecan halves', 4, 'cup', 'nuts', pecans);
pecanIngre = new IngredientBuilder('butter', 0.25, 'cup', 'dairy', pecans);
pecanIngre = new IngredientBuilder('dark maple syrup', 0.333, 'cup', 'condiments', pecans);
var brie = new RecipesConstructor('Apple-Pecan Baked Brie', 10, 'beverages');
var brieIngre = new IngredientBuilder('butter', 1, 'tablespoon', 'dairy', brie);
brieIngre = new IngredientBuilder('small tart apple', 1, 'each', 'produce', brie);
brieIngre = new IngredientBuilder('dried cranberries', 0.333, 'cup', 'produce', brie);
brieIngre = new IngredientBuilder('chopped pecans', 0.25, 'cup', 'nuts', brie);
brieIngre = new IngredientBuilder('brown sugar', 1, 'tablespoon', 'baking', brie);
brieIngre = new IngredientBuilder('ground cinnamon', 0.25, 'teaspoon', 'spices', brie);
brieIngre = new IngredientBuilder('ground nutmeg', 1, 'dash', 'spices', brie);
brieIngre = new IngredientBuilder('Brie cheese', 8, 'ounces', 'dairy', brie);
brieIngre = new IngredientBuilder('crakers', 1, 'assorted', 'other grocery', brie);
var poppers = new RecipesConstructor('Jalapeno Popper Cups', 4, 'beverages');
var poppersIngre = new IngredientBuilder('mini phyllo tart shells', 12, 'each', 'frozen', poppers);
poppersIngre = new IngredientBuilder('cream cheese', 4, 'ounces', 'dairy', poppers);
poppersIngre = new IngredientBuilder('shredded cheddar cheese', 0.5, 'cup', 'dairy', poppers);
poppersIngre = new IngredientBuilder('jalapeno peppers', 2, 'each', 'produce', poppers);
poppersIngre = new IngredientBuilder('hot pepper sauce', 1, 'tablespoon', 'condiments', poppers);
poppersIngre = new IngredientBuilder('bacon bits', 1, 'dash', 'meat', poppers);

// var IngredientsConstructor = function (name, qty, measurementunit, location) {
//   this.name = name;
//   this.quantity = qty;
//   this.measurementunit = measurementunit;
//   this.location = location;
// };

// RecipesConstructor.prototype.ingredientsArrayCreator = function (name, qty, measurementunit, location) {
//   var ingredOne = new IngredientsConstructor (name, qty, measurementunit, location);
//   this.ingredients.push(ingredOne);
// };

// var cider = new RecipesConstructor('MJ\'s Mulled Cider', 8, 'beverages');
// cider.ingredientsArrayCreator('Apple Juice', 0.5, 'gallon', 'juice',cider);
// cider.ingredientsArrayCreator('Cider Mate Mulling Spice', 0.25, 'cup', 'spices', cider);
// var sangria = new RecipesConstructor('Apple Cider Autumn Sangria', 6, 'beverages');
// sangria.ingredientsArrayCreator('cinnamon sticks', 2, 'each', 'spices',sangria);
// sangria.ingredientsArrayCreator('medium pear', 1, 'each', 'produce', sangria);
// sangria.ingredientsArrayCreator('medium orange', 1, 'each', 'produce', sangria);
// sangria.ingredientsArrayCreator('pomegranate seeds', 0.666, 'cup', 'produce', sangria);
// sangria.ingredientsArrayCreator('bottle white wine', 1, 'bottle', 'liquor', sangria);
// sangria.ingredientsArrayCreator('apple cider', 2, 'cup', 'juice', sangria);
// sangria.ingredientsArrayCreator('brandy', 0.5, 'cup', 'liquor', sangria);
// sangria.ingredientsArrayCreator('orange juice', 0.25, 'juice', 'juice', sangria);
// sangria.ingredientsArrayCreator('lemon juice', 2, 'tablespoon', 'produce', sangria);
// sangria.ingredientsArrayCreator('club soda', 1, 'serving', 'juice', sangria);
// var punch = new RecipesConstructor('Lusious Slush Punch', 24, 'beverages');
// punch,ingredientsArrayCreator('white sugar', 2.5, 'cup', 'baking', punch);
// punch,ingredientsArrayCreator('lemon juice', 0.666, 'cup', 'produce', punch);
// punch,ingredientsArrayCreator('orange juice', 1, 'quart', 'juice', punch);
// punch,ingredientsArrayCreator('lemon-lime flavored carbonated beverage', 2, '2-liter bottles', 'juice', punch);
// punch,ingredientsArrayCreator('strawberry flavored mix', 6, 'ounces', 'baking', punch);
// punch,ingredientsArrayCreator('canned pineapple juice', 46, 'fluid ounces', 'juice', punch);
// var pecans = new RecipesConstructor('', , 'beverages');
// pecans.ingredientsArrayCreator('salt', 4, 'teaspoon', 'spices', pecans);
// pecans.ingredientsArrayCreator('cayeene', 0.5, 'teaspoon', 'spices', pecans);
// pecans.ingredientsArrayCreator('white pepper', 1, 'teaspoon', 'spices', pecans);
// pecans.ingredientsArrayCreator('nutmeg', 1, 'teaspoon', 'spices', pecans);
// pecans.ingredientsArrayCreator('cloves', 1, 'teaspoon', 'spices', pecans);
// pecans.ingredientsArrayCreator('allspice', 1, 'teaspoon', 'spices', pecans);
// pecans.ingredientsArrayCreator('pecan halves', 4, 'cup', 'nuts', pecans);
// pecans.ingredientsArrayCreator('butter', 0.25, 'cup', 'dairy', pecans);
// pecans.ingredientsArrayCreator('dark maple syrup', 0.333, 'cup', 'condiments', pecans);
// var brie = new RecipesConstructor('', , 'beverages');
// brie.ingredientsArrayCreator('butter', 1, 'tablespoon', 'dairy', brie);
// brie.ingredientsArrayCreator('small tart apple', 1, 'each', 'produce', brie);
// brie.ingredientsArrayCreator('dried cranberries', 0.333, 'cup', 'other grocery', brie);
// brie.ingredientsArrayCreator('chopped pecans', 0.25, 'cup', 'nuts', brie);
// brie.ingredientsArrayCreator('brown sugar', 1, 'tablespoon', 'baking', brie);
// brie.ingredientsArrayCreator('ground cinnamon', 0.25, 'teaspoon', 'spices', brie);
// brie.ingredientsArrayCreator('ground nutmeg', 1, 'dash', 'spices', brie);
// brie.ingredientsArrayCreator('Brie cheese', 8, 'ounces', 'dairy', brie);
// brie.ingredientsArrayCreator('crakers', 1, 'assorted', 'other grocery', brie);
// var poppers = new RecipesConstructor('Jalapeno Popper Cups', 4, 'beverages');
// poppers.ingredientsArrayCreator('mini phyllo tart shells', 12, 'each', 'frozen', poppers);
// poppers.ingredientsArrayCreator('cream cheese', 4, 'ounces', 'dairy', poppers);
// poppers.ingredientsArrayCreator('shredded cheddar cheese', 0.5, 'cup', 'dairy', poppers);
// poppers.ingredientsArrayCreator('jalapeno peppers', 2, 'each', 'produce', poppers);
// poppers.ingredientsArrayCreator('hot pepper sauce', 1, 'tablespoon', 'condiments', poppers);
// poppers.ingredientsArrayCreator('bacon bits', 1, 'dash', 'meat', poppers);

//===============================================================================================================================================================================
//  Math Function for Recipe and Multiplier
//===============================================================================================================================================================================

var servingMultipler = ['Regular', 'Double', 'Triple', 'Quadruple'];
var servingOptions = document.getElementsByClassName('sel');
var selectOptions = function(){
  for(var a = 0; a < servingMultipler.length; a++){
    var options = document.createElement('option');
    option.textContent = servingMultipler[a];
  };
};
var  = ;
var  = ;

//===============================================================================================================================================================================
//  Render Shopping List Table
//===============================================================================================================================================================================
var tableHeaders = ['Spices', 'Nuts', 'Dairy', 'Condiments', 'Produce', 'Other-Grocery', 'Baking', 'Meat', 'Frozen', 'Juice & Beverages', 'Wine & Liquor'];
var tableBodyData1 = localStorage.getItem('');
var tableBodyData2 = localStorage.getItem('');
var tableBodyData3 = localStorage.getItem('');
var shopListTable = document.getElementById('shopping-list');

var renderAsATableHeader = function(){
  var theadEl = document.getElementById('thead');
  for(var h = 0; h < tableHeaders.length; h++){
    var tdEl = document.createElement('td');
    tdEl.textContent = tableHeaders[h];
    // if(localStorage.getItem()){
      theadEl.appendChild(tdEl);
    // }
  };
  var renderAsATableBody = function(){
    for(var i = 0; i < ; i++) {
      var tbEl = document.getElementById('tbody');
      var trEl = document.createElement('tr');
      var thEl = document.createElement('th');
      thEl.textContent = ;
      trEl.appendChild(thEl);
      thEl = document.createElement('td');
      thEl.textContent = ;
      trEl.appendChild(thEl);
      tbEl.appendChild(trEl);
      shopListTable.appendChild(tbEl);
    };
  };
  shopListTable.appendChild(theadEl);
  renderAsATableBody();
};

renderAsATableHeader();
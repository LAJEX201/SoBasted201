'use strict';

var ingreQty = {};
var ingreMeas = {};
var ingreLoc = {};
var uniqueIngre = [];
var shopListTable = document.getElementById('shopping-list');
var tableHeaders = ['Spices', 'Nuts', 'Dairy', 'Condiments', 'Produce', 'Other-Grocery', 'Baking', 'Meat', 'Frozen', 'Juice & Beverages', 'Wine & Liquor'];

//==============================================================================================================================================================================
//  Math Function for Recipe and Multiplier
//==============================================================================================================================================================================

var allRecipesSelected1;
var allRecipesSelected2;
var allRecipesSelected3;
var allRecipesSelected4;
var allRecipesSelected5;
var allRecipesSelected6;
var allRecipesSelected7;
var allRecipesSelected8;
var allRecipesSelected9;
var allRecipesSelected10;
var allRecipesSelected11;
var allRecipesSelected12;
var allRecipesSelected13;
var allRecipesSelected14;
var allRecipesSelected15;
// var allRecipesSelected16;
// var allRecipesSelected17;
// var allRecipesSelected18;

var staticIngredientsArrayCreator = function(ingredient){
  if (!uniqueIngre.includes(ingredient.name)){
    uniqueIngre.push(ingredient.name);
    ingreQty[ingredient.name] = ingredient.quantity;
    ingreMeas[ingredient.name] = ingredient.measurementunit;
    ingreLoc[ingredient.name] = ingredient.location;
  } else {
    ingreQty[ingredient.name] += ingredient.quantity;
  }
};

if(localStorage.getItem('appetizer-1')){
  allRecipesSelected1 = JSON.parse(localStorage.getItem('appetizer-1'));
  for(var c = 0; c < allRecipesSelected1.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected1.ingredients[c]);

  }
}
if(localStorage.getItem('appetizer-2')){
  allRecipesSelected2 = JSON.parse(localStorage.getItem('appetizer-2'));
  for(var c = 0; c < allRecipesSelected2.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected2.ingredients[c]);

  }
}
if(localStorage.getItem('appetizer-3')){
  allRecipesSelected3 = JSON.parse(localStorage.getItem('appetizer-3'));
  for(var c = 0; c < allRecipesSelected3.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected3.ingredients[c]);

  }
}
if(localStorage.getItem('main-dish-1')){
  allRecipesSelected4 = JSON.parse(localStorage.getItem('main-dish-1'));
  for(var c = 0; c < allRecipesSelected4.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected4.ingredients[c]);

  }
}
if(localStorage.getItem('main-dish-2')){
  allRecipesSelected5 = JSON.parse(localStorage.getItem('main-dish-2'));
  for(var c = 0; c < allRecipesSelected5.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected5.ingredients[c]);

  }
}
if(localStorage.getItem('main-dish-3')){
  allRecipesSelected6 = JSON.parse(localStorage.getItem('main-dish-3'));
  for(var c = 0; c < allRecipesSelected6.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected6.ingredients[c]);

  }
}
if(localStorage.getItem('side-dish-1')){
  allRecipesSelected7 = JSON.parse(localStorage.getItem('side-dish-1'));
  for(var c = 0; c < allRecipesSelected7.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected7.ingredients[c]);

  }
}
if(localStorage.getItem('side-dish-2')){
  allRecipesSelected8 = JSON.parse(localStorage.getItem('side-dish-2'));
  for(var c = 0; c < allRecipesSelected8.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected8.ingredients[c]);

  }
}
if(localStorage.getItem('side-dish-3')){
  allRecipesSelected9 = JSON.parse(localStorage.getItem('side-dish-3'));
  for(var c = 0; c < allRecipesSelected9.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected9.ingredients[c]);

  }
}
if(localStorage.getItem('dessert-1')){
  allRecipesSelected10 = JSON.parse(localStorage.getItem('dessert-1'));
  for(var c = 0; c < allRecipesSelected10.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected10.ingredients[c]);

  }
}
if(localStorage.getItem('dessert-2')){
  allRecipesSelected11 = JSON.parse(localStorage.getItem('dessert-2'));
  for(var c = 0; c < allRecipesSelected11.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected11.ingredients[c]);

  }
}
if(localStorage.getItem('dessert-3')){
  allRecipesSelected12 = JSON.parse(localStorage.getItem('dessert-3'));
  for(var c = 0; c < allRecipesSelected12.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected12.ingredients[c]);

  }
}
if(localStorage.getItem('beverages-1')){
  allRecipesSelected13 = JSON.parse(localStorage.getItem('beverages-1'));
  for(var c = 0; c < allRecipesSelected13.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected13.ingredients[c]);

  }
}
if(localStorage.getItem('beverages-2')){
  allRecipesSelected14 = JSON.parse(localStorage.getItem('beverages-2'));
  for(var c = 0; c < allRecipesSelected14.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected14.ingredients[c]);
  }
}
if(localStorage.getItem('beverages-3')){
  allRecipesSelected15 = JSON.parse(localStorage.getItem('beverages-3'));
  for(var c = 0; c < allRecipesSelected15.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected15.ingredients[c]);
  }
}
// if(localStorage.getItem('beverages-3')){
//  allRecipesSelected16 = JSON.parse(localStorage.getItem('beverages-2'));
// for(var c = 0; c < allRecipesSelected16.ingredients.length; c++){
//     staticIngredientsArrayCreator(allRecipesSelected16.ingredients[c]);
//   }
// };
// if(localStorage.getItem('beverages-3')){
//     allRecipesSelected17 = JSON.parse(localStorage.getItem('beverages-2'));
//     for(var c = 0; c < allRecipesSelected17.ingredients.length; c++){
//         staticIngredientsArrayCreator(allRecipesSelected17.ingredients[c]);
//       }
//   };
// if(localStorage.getItem('beverages-3')){
//  allRecipesSelected18 = JSON.parse(localStorage.getItem('beverages-2'));
// for(var c = 0; c < allRecipesSelected18.ingredients.length; c++){
//     staticIngredientsArrayCreator(allRecipesSelected18.ingredients[c]);
//   }
// };

//Event Listener for "Start Over" Button
var clearListClickHandler = function (event){
  event.preventDefault();
  localStorage.clear();
  location.href = 'index.html';
};

var clearCart = document.getElementById('clear-cart');
clearCart.addEventListener('click', clearListClickHandler);

//==============================================================================================================================================================================
//  Render Shopping List Table
//==============================================================================================================================================================================

// var renderAsATableHeader = function(){
//   var theadEl = document.createElement('thead');
//   for(var h = 0; h < tableHeaders.length; h++){
//     var thEl = document.createElement('th');
//     thEl.textContent = tableHeaders[h].toUpperCase;
//     theadEl.appendChild(thEl);
//     if([r].location === tableHeaders[h]){
//       var renderAsATableBody = function(){
//         for(var i = 0; i < ingredients.length; i++) {
//           var tbEl = document.getElementById('tbody');
//           var trEl = document.createElement('tr');
//           tdEl = document.createElement('td');
//           tdEl.textContent = totaledIngre;
//           trEl.appendChild(tdEl);
//           tbEl.appendChild(trEl);
//           shopListTable.appendChild(tbEl);
//         }
//       };
//     }
//     renderAsATableBody();
//   }
//   shopListTable.appendChild(theadEl);
// };

// renderAsATableHeader();

//make table for list html page
var showListTable = function() {
  var tableContainer = document.getElementById('shopping-list');

  //we said for now we don't need to sort it by the category
  // var storeIsle = ['Spices', 'Nuts', 'Dairy', 'Condiments', 'Produce', 'Other-Grocery', 'Baking', 'Meat', 'Frozen', 'Juice & Beverages', 'Wine & Liquor'];

  //make header of table
  var headerTrEl = document.createElement('tr');
  var headElOne = document.createElement('th');
  headElOne.textContent = 'QUANTITY';
  var headElTwo = document.createElement('th');
  headElTwo.textContent = 'UNIT';
  var headElThree = document.createElement('th');
  headElThree.textContent = 'DESCRIPTION';
  var headElFour = document.createElement('th');
  headElFour.textContent = 'STORE DEPARTMENT';

  headerTrEl.appendChild(headElOne);
  headerTrEl.appendChild(headElTwo);
  headerTrEl.appendChild(headElThree);
  headerTrEl.appendChild(headElFour);

  tableContainer.appendChild(headerTrEl);

  // makes table details for shopping list
  // console.log(uniqueIngre);
  // console.log(ingreQty);
  for (var i = 0; i < uniqueIngre.length; i++){
    var trEl = document.createElement('tr');
    // console.log('test ' + i);
    var tempName = uniqueIngre[i];
    // console.log(tempName);
    console.log(ingreQty[tempName] + ' ' + ingreMeas[tempName]+ ' ' + tempName + ' ' + ingreLoc[tempName]);


    //makes the qty of recipe
    var tdQtyEl = document.createElement('td');
    tdQtyEl.textContent = ingreQty[tempName];

    // //makes the unit name
    var tdUnitEl = document.createElement('td');
    tdUnitEl.textContent = ingreMeas[tempName];

    // //makes the description per recipe
    var tdSDescripEl = document.createElement('td');
    tdSDescripEl.textContent = tempName;

    // //makes the store isle per recipe
    var tdIsleEl = document.createElement('td');
    tdIsleEl.textContent = ingreLoc[tempName];

    // trEl.appendChild(tdLinkEl);
    trEl.appendChild(tdQtyEl);
    trEl.appendChild(tdUnitEl);
    trEl.appendChild(tdSDescripEl);
    trEl.appendChild(tdIsleEl);
    tableContainer.appendChild(trEl);
  }
};

showListTable();


// var saveToLocalStorage = function() {
//   var saveRecipe = JSON.stringify(side1);
//     sideButton1.setAttribute('class', 'selected');
//     localStorage.setItem('side-dish-1', saveRecipe);


// Here is the list of courses for the building of recipes... Appetizer, Main Dish, Side Dish, Dessert, Beverage (don't make them plural)

// Array for Grocery Department = ['Spices', 'Nuts', 'Dairy', 'Condiments', 'Produce', 'Other-Grocery', 'Baking', 'Meat', 'Frozen', 'Juice & Beverages', 'Wine & Liquor']


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
//    START rendering table for shopping list
//copied to list.js 11-2-18
// ======================

//make table for list html page
var showListTable = function() {
  var tableContainer = document.getElementById('shopping-list');

  //array so can sort it by the category
  var storeIsle = ['SPICES', 'NUTS', 'DAIRY', 'CONDIMENTS', 'PRODUCE', 'OTHER-GROCERY', 'BAKING', 'MEAT', 'FROZEN', 'JUICE & BEVERAGES', 'WINE & LIQUOR'];

  //make header of table
  var headerTrEl = document.createElement('tr');
  var headElZero = document.createElement('th');
  headElZero.textContent = 'Remove';
  var headElOne = document.createElement('th');
  headElOne.textContent = 'Quantity';
  var headElTwo = document.createElement('th');
  headElTwo.textContent = 'Unit';
  var headElThree = document.createElement('th');
  headElThree.textContent = 'Description';
  var headElFour = document.createElement('th');
  headElFour.textContent = 'Store Isle';

  headerTrEl.appendChild(headElZero);
  headerTrEl.appendChild(headElOne);
  headerTrEl.appendChild(headElTwo);
  headerTrEl.appendChild(headElThree);
  headerTrEl.appendChild(headElFour);

  tableContainer.appendChild(headerTrEl);

  for (var y = 0; y < storeIsle.length; y++) {
    for (var i = 0; i < uniqueIngre.length; i++){
      var tempName = uniqueIngre[i];

      //makes the checkbox for strike
      if(ingreLoc[tempName] === storeIsle[y]) {
        console.log('in if statement');
        var trEl = document.createElement('tr');
        var tdCheckboxInputEl = document.createElement('input');
        var tdCheckboxLabelEl = document.createElement('label');
        tdCheckboxInputEl.type = ('checkbox');
        tdCheckboxInputEl.id= tempName;
        tdCheckboxLabelEl.for=tempName;

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

        trEl.appendChild(tdCheckboxInputEl);
        trEl.appendChild(tdCheckboxLabelEl);
        tdCheckboxLabelEl.appendChild(tdQtyEl);
        tdCheckboxLabelEl.appendChild(tdUnitEl);
        tdCheckboxLabelEl.appendChild(tdSDescripEl);
        tdCheckboxLabelEl.appendChild(tdIsleEl);
        tableContainer.appendChild(trEl);
      }
    }
  }
};

showListTable();

// ======================
//    END rendering table for shopping list
// ======================

// ======================
//    Start for trying to not have to hard code all the recipes
// ======================


// ======================
//    END for trying to not have to hard code all the recipes
// ======================

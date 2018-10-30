'use strict';

var ingredients = [];
totaledIngre = {};
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
var doesIngredientExist = false;
var indexOfIngredientExist = -1;

for (var i = 0; i < ingredients.length; i ++){
  if (name == ingredients[i].name){
    indexOfIngredientExist = i;
    doesIngredientExist = true;
  }
}

if (doesIngredientExist){
  ingredients[indexOfIngredientExist].quantity = ingredients[indexOfIngredientExist].quantity + qty;
} else {
  ingredients.push(ingredient);
}
};

if(localStorage.getItem('appetizer-1')){
  allRecipesSelected1 = JSON.parse(localStorage.getItem('appetizer-1'));
  for(var c = 0; c < allRecipesSelected1.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected1.ingredients[c]);
    
  }
};
if(localStorage.getItem('appetizer-2')){
    allRecipesSelected2 = JSON.parse(localStorage.getItem('appetizer-2'));
    for(var c = 0; c < allRecipesSelected2.ingredients.length; c++){
        staticIngredientsArrayCreator(allRecipesSelected2.ingredients[c]);
      
    }
  };
if(localStorage.getItem('appetizer-3')){
    allRecipesSelected3 = JSON.parse(localStorage.getItem('appetizer-3'));
    for(var c = 0; c < allRecipesSelected3.ingredients.length; c++){
        staticIngredientsArrayCreator(allRecipesSelected3.ingredients[c]);
      
    }
  };
if(localStorage.getItem('main-dish-1')){
    allRecipesSelected4 = JSON.parse(localStorage.getItem('main-dish-1'));
    for(var c = 0; c < allRecipesSelected4.ingredients.length; c++){
      staticIngredientsArrayCreator(allRecipesSelected4.ingredients[c]);
      
    }
  };
if(localStorage.getItem('main-dish-2')){
    allRecipesSelected5 = JSON.parse(localStorage.getItem('main-dish-2'));
  for(var c = 0; c < allRecipesSelected5.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected5.ingredients[c]);
    
  }
};
if(localStorage.getItem('main-dish-3')){
    allRecipesSelected6 = JSON.parse(localStorage.getItem('main-dish-3'));
    for(var c = 0; c < allRecipesSelected6.ingredients.length; c++){
      staticIngredientsArrayCreator(allRecipesSelected6.ingredients[c]);
      
    }
  };
if(localStorage.getItem('side-dish-1')){
    allRecipesSelected7 = JSON.parse(localStorage.getItem('side-dish-1'));
    for(var c = 0; c < allRecipesSelected7.ingredients.length; c++){
      staticIngredientsArrayCreator(allRecipesSelected7.ingredients[c]);
      
    }
  };
if(localStorage.getItem('side-dish-2')){
    allRecipesSelected8 = JSON.parse(localStorage.getItem('side-dish-2'));
    for(var c = 0; c < allRecipesSelected8.ingredients.length; c++){
      staticIngredientsArrayCreator(allRecipesSelected8.ingredients[c]);
      
    }
  };
if(localStorage.getItem('side-dish-3')){
    allRecipesSelected9 = JSON.parse(localStorage.getItem('side-dish-3'));
    for(var c = 0; c < allRecipesSelected9.ingredients.length; c++){
      staticIngredientsArrayCreator(allRecipesSelected9.ingredients[c]);
      
    }
  };
if(localStorage.getItem('dessert-1')){
    allRecipesSelected10 = JSON.parse(localStorage.getItem('dessert-1'));
  for(var c = 0; c < allRecipesSelected10.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected10.ingredients[c]);
    
  }
};
if(localStorage.getItem('dessert-2')){
    allRecipesSelected11 = JSON.parse(localStorage.getItem('dessert-2'));
    for(var c = 0; c < allRecipesSelected11.ingredients.length; c++){
      staticIngredientsArrayCreator(allRecipesSelected11.ingredients[c]);
      
    }
  };
if(localStorage.getItem('dessert-3')){
    allRecipesSelected12 = JSON.parse(localStorage.getItem('dessert-3'));
    for(var c = 0; c < allRecipesSelected12.ingredients.length; c++){
      staticIngredientsArrayCreator(allRecipesSelected12.ingredients[c]);
      
    }
  };
if(localStorage.getItem('beverages-1')){
  allRecipesSelected13 = JSON.parse(localStorage.getItem('beverages-1'));
  for(var c = 0; c < allRecipesSelected13.ingredients.length; c++){
    staticIngredientsArrayCreator(allRecipesSelected13.ingredients[c]);
    
  
};
if(localStorage.getItem('beverages-2')){
  allRecipesSelected14 = JSON.parse(localStorage.getItem('beverages-2'));
  for(var c = 0; c < allRecipesSelected14.ingredients.length; c++){
      staticIngredientsArrayCreator(allRecipesSelected14.ingredients[c]);
    }
};
if(localStorage.getItem('beverages-3')){
  allRecipesSelected15 = JSON.parse(localStorage.getItem('beverages-3'));
  for(var c = 0; c < allRecipesSelected15.ingredients.length; c++){
      staticIngredientsArrayCreator(allRecipesSelected15.ingredients[c]);
    }
};
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

for(var r = 0; r < ingredients.length; r++){
    if(!totaledIngre[ingredients[r].name]){
      totaledIngre[ingredients[r].name]={quantity:ingredients[r].quantity, measurementunit:ingredients[r].measurementunit, location:ingredients[r].location};
    } else{
      totaledIngre[ingredients[r].name].quantity = totaledIngre[ingredients[r].name].quantity+ingredients[r].quantity;
    }
};

//==============================================================================================================================================================================
//  Render Shopping List Table
//==============================================================================================================================================================================

var renderAsATableHeader = function(){
  var theadEl = document.getElementById('thead');
  for(var h = 0; h < tableHeaders.length; h++){
    var tdEl = document.createElement('td');
    tdEl.textContent = tableHeaders[h].toUpperCase;
    theadEl.appendChild(tdEl);
    if(totaledIngre[r].location === tableHeaders[h]){
      var renderAsATableBody = function(){
        for(var i = 0; i < ingredients.length; i++) {
          var tbEl = document.getElementById('tbody');
          var trEl = document.createElement('tr');
          tdEl = document.createElement('td');
          tdEl.textContent = totaledIngre;
          trEl.appendChild(tdEl);
          tbEl.appendChild(trEl);
          shopListTable.appendChild(tbEl);
        }
      };
    }
    renderAsATableBody();
  }
  shopListTable.appendChild(theadEl);
};

renderAsATableHeader();
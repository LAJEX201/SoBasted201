'use strict';

var ingredients = [];
var totaledIngre = {};
var shopListTable = document.getElementById('shopping-list');
var tableHeaders = ['Spices', 'Nuts', 'Dairy', 'Condiments', 'Produce', 'Other-Grocery', 'Baking', 'Meat', 'Frozen', 'Juice & Beverages', 'Wine & Liquor'];

//===============================================================================================================================================================================
//  Math Function for Recipe and Multiplier
//===============================================================================================================================================================================

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

if(localStorage.getItem('appetizer-1')){
  allRecipesSelected1 = localStorage.getItem(JSON.parse('appetizer-1'));
  for(var c = 0; c < allRecipesSelected1.length; c++){
    for(var d = 0; d < allRecipesSelected1[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected1[c].ingredients);
    }
  }
}
if(localStorage.getItem('appetizer-2')){
  allRecipesSelected2 = localStorage.getItem(JSON.parse('appetizer-2'));
  for(var c = 0; c < allRecipesSelected2.length; c++){
    for(var d = 0; d < allRecipesSelected2[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected2[c].ingredients);
    }
  }
}
if(localStorage.getItem('appetizer-3')){
  allRecipesSelected3 = localStorage.getItem(JSON.parse('appetizer-3'));
  for(var c = 0; c < allRecipesSelected3.length; c++){
    for(var d = 0; d < allRecipesSelected3[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected3[c].ingredients);
    }
  }
}
if(localStorage.getItem('main-dish-1')){
  allRecipesSelected4 = localStorage.getItem(JSON.parse('main-dish-1'));
  for(var c = 0; c < allRecipesSelected4.length; c++){
    for(var d = 0; d < allRecipesSelected4[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected4[c].ingredients);
    }
  }
}
if(localStorage.getItem('main-dish-2')){
  allRecipesSelected5 = localStorage.getItem(JSON.parse('main-dish-2'));
  for(var c = 0; c < allRecipesSelected5.length; c++){
    for(var d = 0; d < allRecipesSelected5[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected5[c].ingredients);
    }
  }
}
if(localStorage.getItem('main-dish-3')){
  allRecipesSelected6 = localStorage.getItem(JSON.parse('main-dish-3'));
  for(var c = 0; c < allRecipesSelected6.length; c++){
    for(var d = 0; d < allRecipesSelected6[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected6[c].ingredients);
    }
  }
}
if(localStorage.getItem('side-dish-1')){
  allRecipesSelected7 = localStorage.getItem(JSON.parse('side-dish-1'));
  for(var c = 0; c < allRecipesSelected7.length; c++){
    for(var d = 0; d < allRecipesSelected7[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected7[c].ingredients);
    }
  }
}
if(localStorage.getItem('side-dish-2')){
  allRecipesSelected8 = localStorage.getItem(JSON.parse('side-dish-2'));
  for(var c = 0; c < allRecipesSelected8.length; c++){
    for(var d = 0; d < allRecipesSelected8[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected8[c].ingredients);
    }
  }
}
if(localStorage.getItem('side-dish-3')){
  allRecipesSelected9 = localStorage.getItem(JSON.parse('side-dish-3'));
  for(var c = 0; c < allRecipesSelected9.length; c++){
    for(var d = 0; d < allRecipesSelected9[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected9[c].ingredients);
    }
  }
}
if(localStorage.getItem('dessert-1')){
  allRecipesSelected10 = localStorage.getItem(JSON.parse('dessert-1'));
  for(var c = 0; c < allRecipesSelected10.length; c++){
    for(var d = 0; d < allRecipesSelected10[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected10[c].ingredients);
    }
  }
}
if(localStorage.getItem('dessert-2')){
  allRecipesSelected11 = localStorage.getItem(JSON.parse('dessert-2'));
  for(var c = 0; c < allRecipesSelected11.length; c++){
    for(var d = 0; d < allRecipesSelected11[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected11[c].ingredients);
    }
  }
}
if(localStorage.getItem('dessert-3')){
  allRecipesSelected12 = localStorage.getItem(JSON.parse('dessert-3'));
  for(var c = 0; c < allRecipesSelected12.length; c++){
    for(var d = 0; d < allRecipesSelected12[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected12[c].ingredients);
    }
  }
}
if(localStorage.getItem('beverages-1')){
  allRecipesSelected13 = localStorage.getItem(JSON.parse('beverages-1'));
  for(var c = 0; c < allRecipesSelected13.length; c++){
    for(var d = 0; d < allRecipesSelected13[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected13[c].ingredients);
    }
  }
}
if(localStorage.getItem('beverages-2')){
  allRecipesSelected14 = localStorage.getItem(JSON.parse('beverages-2'));
  for(var c = 0; c < allRecipesSelected14.length; c++){
    for(var d = 0; d < allRecipesSelected14[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected14[c].ingredients);
    }
  }
}
if(localStorage.getItem('beverages-3')){
  allRecipesSelected15 = localStorage.getItem(JSON.parse('beverages-3'));
  for(var c = 0; c < allRecipesSelected15.length; c++){
    for(var d = 0; d < allRecipesSelected15[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected15[c].ingredients);
    }
  }
}
// if(localStorage.getItem('beverages-3')){
//   allRecipesSelected16 = localStorage.getItem(JSON.parse('beverages-3'));
//   for(var c = 0; c < allRecipesSelected16.length; c++){
//    for(var d = 0; d < allRecipesSelected16[c].ingredients.length; d++){
//     ingredients.push(allRecipesSelected16[c].ingredients);
//    };
//  };
// };
// if(localStorage.getItem('beverages-3')){
//   allRecipesSelected17 = localStorage.getItem(JSON.parse('beverages-3'));
// for(var c = 0; c < allRecipesSelected17.length; c++){
// for(var d = 0; d < allRecipesSelected17[c].ingredients.length; d++){
// ingredients.push(allRecipesSelected17[c].ingredients);
//    };
//  };
// };
// if(localStorage.getItem('beverages-3')){
//   allRecipesSelected18 = localStorage.getItem(JSON.parse('beverages-3'));
//   for(var c = 0; c < allRecipesSelected18.length; c++){
//    for(var d = 0; d < allRecipesSelected18[c].ingredients.length; d++){
//     ingredients.push(allRecipesSelected18[c].ingredients);
//    };
//  };
// };

for(var r = 0; r < ingredients.length; r++){
  if(!totaledIngre[ingredients[r].name]){
    totaledIngre[ingredients[r].name]={quantity:ingredients[r].quantity, measurementunit:ingredients[r].measurementunit, location:ingredients[r].location};
  } else{
    totaledIngre[ingredients[r].name].quantity = totaledIngre[ingredients[r].name].quantity+ingredients[r].quantity;
  }
}

//===============================================================================================================================================================================
//  Render Shopping List Table
//===============================================================================================================================================================================

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

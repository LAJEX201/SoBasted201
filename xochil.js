'use strict';

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

var dessertOne = new RecipesConstructor ('The Great Pumpkin Pie Recipe', 8, 'dessert');
    dessertOne.ingredientsArrayCreator ('fresh cranberries', 1,'cup', 'produce');
    dessertOneOne.ingredientsArrayCreator ('granulated sugar', 2,'cup', 'baking');
    dessertOne.ingredientsArrayCreator ('pre-made pie crust', 1, 'package', 'other-grocery');
    dessertOne.ingredientsArrayCreator ('pumkin puree', 1, 'can', 'other-grocery');
    dessertOne.ingredientsArrayCreator ('eggs', 3, 'each', 'dairy');
    dessertOne.ingredientsArrayCreator ('packed light brown sugar', 1.25, 'cup', 'baking');
    dessertOne.ingredientsArrayCreator ('cornstarch', 1, 'tablespoon', 'baking');
    dessertOne.ingredientsArrayCreator ('salt', .5, 'teaspoon', 'spices');
    dessertOne.ingredientsArrayCreator ('ground cinnamon', 1.5, 'teaspoon', 'spices');
    dessertOne.ingredientsArrayCreator ('ground ginger', .5, 'teaspoon', 'spices');
    dessertOne.ingredientsArrayCreator ('grated nutmeg', .25, 'teaspoon', 'spices');
    dessertOne.ingredientsArrayCreator ('ground pepper', .125, 'teaspoon');
    dessertOne.ingredientsArrayCreator ('heavy cream', 1, 'cup', 'cup', 'dairy');
    dessertOne.ingredientsArrayCreator ('milk', .25, 'cup', 'dairy');
    dessertOne.ingredientsArrayCreator ('egg', 1, 'each', 'dairy');
    dessertOne.ingredientsArrayCreator ('milk', 1, 'tablespoon', 'dairy');

var dessertTwo = new RecipesConstructor ('Cranberry-Almond Shortbread Tart', 8, 'dessert');
     dessertTwo.ingredientsArrayCreator ('granulated sugar', 1, 'cup', 'baking');
     dessertTwo.ingredientsArrayCreator ('fresh lemon juice', 2, 'tablespoon', 'produce');
     dessertTwo.ingredientsArrayCreator ('fresh or thawed cranberries', 12, 'ounces', 'frozen');
     dessertTwo.ingredientsArrayCreator ('apricot jam', 3, 'tablespoons', 'condiments');
     dessertTwo.ingredientsArrayCreator ('sliced almonds', 3.5, 'cups', 'nuts');
     dessertTwo.ingredientsArrayCreator ('all-purpose flour', 2, 'cup', 'baking');
     dessertTwo.ingredientsArrayCreator ('fine yellow cornmeal', .25, 'cup', 'baking');
     dessertTwo.ingredientsArrayCreator ('salt', .75, 'teaspoon', 'baking');
     dessertTwo.ingredientsArrayCreator ('unsalted butter', 1, 'cup', 'dairy');
     dessertTwo.ingredientsArrayCreator ('granulated sugar', 1, 'cup', 'baking');
     dessertTwo.ingredientsArrayCreator ('lemon zest', .5, 'teaspoon', 'produce');
     dessertTwo.ingredientsArrayCreator ('pure vanilla extract', .75, 'teaspoon', 'spices');
     dessertTwo.ingredientsArrayCreator ('pure almond extract', .25, 'teaspoon', 'baking');
     dessertTwo.ingredientsArrayCreator ('egg', 1, 'each', 'dairy');//this is one large yolk.. how will we handle that?
     dessertTwo.ingredientsArrayCreator ('cooking spray', 1, 'spray', 'baking'); //how do we do the cooking spray?
     dessertTwo.ingredientsArrayCreator ('confectioners sugar', 1, 'teaspoon', 'baking'); //there is not actually a measure for the sugar...

var dessertThree = new RecipesConstructor ('Arkansas Black Apple Pie with Caramel Sauce Recipe', 8, 'dessert');
     dessertThree.ingredientsArrayCreator ('granny smith apples', 6, 'each', 'produce');
     dessertThree.ingredientsArrayCreator ('lemon juice', 1, 'each', 'produce');
     dessertThree.ingredientsArrayCreator ('granulated sugar', 1, 'cup', 'baking');
     dessertThree.ingredientsArrayCreator ('all-purpose flour', .25, 'cup', 'baking');
     dessertThree.ingredientsArrayCreator ('cinnamon', 1, 'teaspoon', 'spices');
     dessertThree.ingredientsArrayCreator ('nutmeg', .5, 'teaspoon', 'spices');
     dessertThree.ingredientsArrayCreator ('allspice', .25, 'teaspoon', 'spices');
     dessertThree.ingredientsArrayCreator ('pre-made pie crust', 1, 'each', 'other-store');
     dessertThree.ingredientsArrayCreator ('butter', 2, 'tablespoon', 'dairy');
     dessertThree.ingredientsArrayCreator ('egg', 1, 'each', 'dairy');
     dessertThree.ingredientsArrayCreator ('sugar', 2, 'tablespoons', 'baking');



 

    

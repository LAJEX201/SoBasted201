# USER


#H1 DEVELOPER

1. As the developer, we will create a Recipe Home Page with listings of recipes for the users to choose from. This will be accomplished by creating objects of recipes and ingredients.    
```var Recipes = function(){
        name of recipe: string;
        # of servings: number;
        array of ingrediant object: [];
        catagory type: (app, main, side, dessert, drink);
        add to menu: boolean;
        src/image/link: link;

    }```
```var ingredients = function (){
        name: string
        quantity: number
        measurement: units
        store location: meat, dairy, product, etc
    }```

2. As a developer we want to add the ingredients to the recipes. We will do this by creating an 'ingredient constructor'.
3. As the developers we will create a 'Shopping List Builder" page.  The Shopping List Builder page will compile the information inputed from the Recipe Home Page. To accomplish this, we will need fuctions which do the following:
* calculate measurements to a denominator that can work with all ingredients.  We will need some for volume, weight and items.
*add and remove recipe from local storage.

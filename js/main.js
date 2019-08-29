// //anon function
// let example = function () {
//     console.log('hello there');
// }
// //naming function
// function exampleName() {
//     console.log('hello there');
// }

// // example();
// // exampleName();

// // const turnValueUppercase = val => console.log(val.toUpperCase());
// // const multiplyValues = (arg1, arg2) => {return arg1 * arg2};
// // turnValueUppercase('hello');
// // console.log(multiplyValues(2, 6));

// // function turnValueUppercase(val) {
// //     console.log(val.toUpperCase());
// // }
// // create an array of three names
// let names = [
//     'Jacque',
//     'Jake',
//     'Gina',
//     'ANOTHER NAME'
// ];
// // create a greeting that will be taking in a name value
// const greeting = name => `Good evening, ${name}`;

// //test result first:
// console.log(`The array of names ${names}`, `greeting function value: ${greeting('Example')}`);

// const limit = 3;
// //loop through names and add greeting function to it
// for(j = 0; j < names.length; j++) {
//     console.log(greeting(names[j]));
// }




//grab elements from HTML:
// const h1 = document.getElementById('greeting');
// const myList = document.getElementById('groceryList');
// const listItem = document.getElementById('groceryItem');
// const myInput = document.getElementById('getGroceryItem');

const greeting = document.getElementById('greeting');
const groceryList = document.getElementById('groceryList');
const groceryItem = document.getElementById('groceryItem');
const getGroceryItem = document.getElementById('getGroceryItem');

let arrayOfGroceryItems = [];

greeting.innerHTML = 'Jacque\'s Grocery List';

//create function to add onto grocery list
// const addGroceryItem = (arr, value) => arr.push(value);
// console.log(addGroceryItem(arrayOfGroceryItems, 'Carrots'));
// console.log(arrayOfGroceryItems);

function addGroceryItem(arr, value) {
    arr.push(value);
}

function ejectGroceryItemToList(values) { 
    //goal: push array items to list on html

    /*I changed the grocery value to one instead of zero because of the list item below. the reason I called my list items in here because i need to loop through the id #'s too add individual array values into them; i am just appending the GROCERY val to the name to the id*/
    if (arrayOfGroceryItems !== undefined) {
        for (grocery = 0; grocery < arrayOfGroceryItems.length; grocery++) {
            let li = document.getElementById(`groceryItem${grocery + 1}`);
            // now that I can loop through my list items, i can now eject EACH array val into EACH seperate list item.
            li.innerHTML = values[grocery];
        }
    }
    else {
        alert('Sorry, the array is empty right now.');
    }
}
// addGroceryItem(arrayOfGroceryItems, 'Testing');
// addGroceryItem(arrayOfGroceryItems, 'Testing');
addGroceryItem(arrayOfGroceryItems, 'Chocolate');
// console.log(arrayOfGroceryItems);
ejectGroceryItemToList(arrayOfGroceryItems);
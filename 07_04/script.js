/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


let itemsOnDesk = ['mouse', 'mousepad', 'headset', 'laptop', 'charger', 'flash drive', 'webcam', 'phone'];
console.log(itemsOnDesk);

// remove last item
let lastItem = itemsOnDesk.pop();
console.log(itemsOnDesk);

// add last item as first item on the array;
itemsOnDesk.unshift(lastItem);
console.log(itemsOnDesk);

// sort by alphabetical order
itemsOnDesk.sort();
console.log(itemsOnDesk);

// find item in the array
let laptop = itemsOnDesk.find((item) => {
    if (item == 'laptop') return item;
});
console.log(itemsOnDesk);

// remove the item found from the array
let index = itemsOnDesk.indexOf(laptop);
itemsOnDesk.splice(index, 1);
console.log(itemsOnDesk);
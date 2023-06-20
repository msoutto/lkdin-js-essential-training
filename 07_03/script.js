/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents);

// join concatenates all the items in a single string
console.log(backpackContents.join(", "));

// push appends the items to the end of the array
backpackContents.push("pencil", 5);

console.log(backpackContents);

// shift removes the first item of the array
backpackContents.shift("pencil", 5);

console.log(backpackContents);

// pop removes the last item of the array
backpackContents.pop();

console.log(backpackContents);

backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);

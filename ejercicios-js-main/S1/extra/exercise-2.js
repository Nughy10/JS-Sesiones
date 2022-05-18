const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

foodSchedule.forEach((food) => {
  if (food.isVegan == false) {
    //let fruit = fruits.shift();
    //food.name = fruit;
    food.name = fruits.pop();
    food.isVegan = true;
    // console.log(fruits)
  }
});

console.log(foodSchedule);

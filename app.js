// ============ TASK 1: forEach() ============
console.log(" Task 1: forEach() ");

let cities = ["Paris", "Tokyo", "London", "Dubai", "Sydney"];

cities.forEach(function(city) {
    console.log(city.toUpperCase());
});

// Expected Output:
// PARIS
// TOKYO
// LONDON
// DUBAI
// SYDNEY


// ============ TASK 2: map() ============
console.log("Task 2: map() ");

let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(function(num) {
    return num * num;
});

console.log("Squared numbers:", squares);

// Expected Output:
// Squared numbers: [1, 4, 9, 16, 25]


// ============ TASK 3: filter() ============
console.log(" Task 3: filter() ");

let scores = [85, 42, 90, 75, 30, 100];

let highScores = scores.filter(function(score) {
    return score >= 80;
});

console.log("High scores:", highScores);

// Expected Output:
// High scores: [85, 90, 100]


// ============ TASK 4: find() and findIndex() ============
console.log(" Task 4: find() and findIndex() ");

let favoriteFood = ["Sushi", "Taco", "Pizza", "Burger", "Pasta", "Salad"];

let foundFood = favoriteFood.find(function(food) {
    return food.length > 4;
});

let foodIndex = favoriteFood.findIndex(function(food) {
    return food.length > 4;
});

console.log("First food with more than 4 letters:", foundFood);
console.log("Index of that food:", foodIndex);

// Expected Output:
// First food with more than 4 letters: Sushi
// Index of that food: 0


// ============ TASK 5: some() and every() ============
console.log(" Task 5: some() and every() ");

let temperatures = [72, 85, 91, 68, 78];

let anyAbove90 = temperatures.some(function(temp) {
    return temp > 90;
});

let allAbove50 = temperatures.every(function(temp) {
    return temp > 50;
});

let results = [anyAbove90, allAbove50];
console.log("Results [anyAbove90, allAbove50]:", results);

// Expected Output:
// Results [anyAbove90, allAbove50]: [true, true]


// ============ TASK 6: reduce() ============
console.log(" Task 6: reduce() ");

let budget = 100;
let prices = [25, 30, 15, 20];

let remaining = prices.reduce(function(total, price) {
    return total - price;
}, budget);

console.log("Starting budget:", budget);
console.log("Prices:", prices);
console.log("Remaining budget:", remaining);

if (remaining >= 0) {
    console.log("These items fit within your budget!");
} else {
    console.log("You are over budget!");
}

// Expected Output:
// Starting budget: 100
// Prices: [25, 30, 15, 20]
// Remaining budget: 10
// These items fit within your budget!
let locations = [];
let jobOpenings = [];

let dailySpecial = { name: "dailySpecial", price: 15};
let breakfast = {name: "pancakes", price: 12};
let lunch = {name: "tacos", price: 18};
let dinner = {name: "grilled salmon", price: 25};
let drinks = ["coffee", "soda", "cocktail"];

let menu = [dailySpecial, breakfast, lunch, dinner, drinks];

let location1 = {street: "A Street", city: "Atlanta", zip: "11111"};
let location2 = {street: "B Street", city: "Boston", zip: "22222"};
let location3 = {street: "C Street", city: "Columbus", zip: "33333"};
let location4 = {street: "D Street", city: "Detroit", zip: "44444"};

let job1 = {title: "line cook", hourlyWage: 25};
let job2 = {title: "waitress", hourlyWage: 22};

locations.push(location1, location2, location3, location4);
console.log(locations);

jobOpenings.push(job1, job2);
console.log(jobOpenings);
console.log(menu);
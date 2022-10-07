const { boatInventory } = require("./fishingBoat.js");

const newFish = boatInventory();

const mongerInventory = (budget) => {
  const purchasedFish = [];
  for (const fish of newFish) {
    if (fish.amount >= 10 && fish.price < 7.5 && fish.price <= budget) {
      purchasedFish.push(fish);
      fish.amount = 10;
    }
  }
  return purchasedFish;
};

// const fishToSell = (budget) => {
//   const mongerInventory = [];
//   const filteredFish = purchasefish(newFish);
//   for (fish of filteredFish) {
//     if (fish.price <= budget) {
//       mongerInventory.push(fish);
//     }
//   }
//   return mongerInventory;
// };

module.exports = { mongerInventory };

/*
    1. I need to import todaysCatch from the fishingboat.
    2. I need a function that loops through the array todaysCatch and find 
        a. Only the fish that have a quaninty of more than 10 
        b. Cost less than $7.50 
        c. He will purchase a total of 10 of those fish
    3. I need to push those fish objects to a new array
    
    4. I need a function that allows the chef of a restuarant to specify how much per fish they would like to spend and returns only the fish that the fishMonger has in an array called mongerInventory.
    5. I need to export the fuction to restaurant.js  
*/

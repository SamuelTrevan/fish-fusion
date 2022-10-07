const { mongerInventory } = require("./fishMonger.js");

/*
    1. I need to call the funtion fishToSell and provide a price
    2. I need to create a function that loops through the results and only buys 50% of the inventory
    3. I need to create a function that takes those fish and creates a menu in HTML. 
        fish Soup
        fish Sandwich
        Grilled fish
    example HTML:
        Your HTML structure must match the example below. Use the same elements and the same class names.
<h1>Menu</h1>
<article class="menu">
    <h2>Tuna</h2>
    <section class="menu__item">Tuna Soup</section>
    <section class="menu__item">Tuna Sandwich</section>
    <section class="menu__item">Grilled Tuna</section>
</article>
*/

// const chefsPurchase = (budget) => {
//   const chefsInventory = [];
//   const menuItems = fishToSell();
//   for (const fish of menuItems) {
//   }
//   if (fish.price <= budget) {
//     chefsInventory.push({
//       id: fish.id,
//       species: fish.species,
//       weight: fish.weight,
//       price: fish.price,
//       amount: fish.amount / 2,
//     });
//   }
// };

const fishMenu = () => {
  let menu = `<h1>Menu</h1>\n<article class="menu">`;
  const menuItems = mongerInventory(5.0);
  for (const fish of menuItems) {
    menu += `\n<h2>${fish.species}</h2>\n <section class="menu__item">${fish.species} Soup</section>\n<section class="menu__item">${fish.species} Sandwich</section>\n<section class="menu__item">Grilled ${fish.species}</section>`;
  }
  menu += `\n</article>`;
  return menu;
};

module.exports = { fishMenu };

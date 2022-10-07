/*
    1. Fishing Boat - This is the source of the fish. The boat catches the fish and makes the fresh catch available to purchasers.
    
    2. Fishmonger - The fishmonger purchases fresh fish off the boat, and head chefs around the city visit every morning to get fish for their daily menus.
    
    3. Fish Restaurant - The chef at fish restaurant purchases fresh fish from the fishmonger every day. To keep her prices low, she purchases lower cost food and combines them in tasty ways that people might not expect.
*/

const { fishMenu } = require("./restaurant.js");

const menu = fishMenu();
console.log(menu);

/* Uncomment this code block when you're ready to test your logic

*/

function waiterApplicationV4() {
    // Hardcoded orders: [table number, category, item name, item price]
    const hardcodedOrders = [
        [1, 'Appetizer', 'Appetizer-5', 5],
        [1, 'Beverage', 'Beverage-1', 3],
        [2, 'Main Dish', 'Dish-12', 15],
        [3, 'Dessert', 'Dessert-2', 7],
        [3, 'Beverage', 'Beverage-2', 4],
        [4, 'Main Dish', 'Dish-20', 18],
        [5, 'Appetizer', 'Appetizer-3', 6],
        [5, 'Beverage', 'Beverage-3', 5],
        [6, 'Main Dish', 'Dish-15', 14],
        [6, 'Dessert', 'Dessert-3', 7],
        [7, 'Main Dish', 'Dish-8', 13],
        [7, 'Beverage', 'Beverage-4', 2],
        [8, 'Appetizer', 'Appetizer-1', 6],
        [9, 'Main Dish', 'Dish-21', 16],
        [9, 'Beverage', 'Beverage-1', 3],
        [10, 'Dessert', 'Dessert-4', 9],
        [11, 'Main Dish', 'Dish-28', 15],
        [11, 'Beverage', 'Beverage-3', 5],
        [12, 'Main Dish', 'Dish-4', 14],
        [13, 'Appetizer', 'Appetizer-4', 5],
        [13, 'Beverage', 'Beverage-2', 4],
        [14, 'Main Dish', 'Dish-9', 15],
        [15, 'Dessert', 'Dessert-1', 8],
        [16, 'Main Dish', 'Dish-2', 17],
        [16, 'Beverage', 'Beverage-4', 2],
        [17, 'Appetizer', 'Appetizer-2', 5],
        [18, 'Main Dish', 'Dish-6', 13],
        [19, 'Dessert', 'Dessert-5', 8],
        [19, 'Beverage', 'Beverage-1', 3],
        [20, 'Main Dish', 'Dish-19', 16],
        [20, 'Beverage', 'Beverage-3', 5]
    ];
    
    let tablesServed = new Set();
    let itemsServed = 0;
    let totalTurnover = 0.0;

    for(let i = 0; i < hardcodedOrders.length; i++) {
        const order = hardcodedOrders[i];
        const tableNumber = order[0];
        const category = order[1];
        const itemName = order[2];
        const itemPrice = order[3];

        tablesServed.add(tableNumber);
        itemsServed += 1;
        totalTurnover += itemPrice;
    }

    // Print summary
    console.log("\nSummary:");
    console.log(`Tables served: ${tablesServed.size}`);
    console.log(`Items served: ${itemsServed}`);
    console.log(`Total turnover: $${totalTurnover.toFixed(2)}`);

    // Return summary information as an object
    const summaryInfo = {
        tablesServed: tablesServed.size,
        itemsServed: itemsServed,
        totalTurnover: totalTurnover
    };

    return summaryInfo;
}

// Call the function
const summary = waiterApplicationV4();

// Print the summary information:
console.log("\nOutput:");
console.log(`Tables served: ${summary.tablesServed}`);
console.log(`Items served: ${summary.itemsServed}`);
console.log(`Total turnover: $${summary.totalTurnover.toFixed(2)}`);

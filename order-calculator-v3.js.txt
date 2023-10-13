function waiterApplicationV3() {
    // Hardcoded orders: [table number, item name, item price]
    const hardcodedOrders = [
        [1, 'Dish-5', 8],
        [1, 'Beverage-1', 3],
        [2, 'Dish-12', 12],
        [3, 'Dish-33', 10],
        [3, 'Beverage-2', 4],
        [4, 'Dish-20', 9],
        [5, 'Dish-3', 8],
        [5, 'Beverage-3', 5],
        [6, 'Dish-15', 12],
        [6, 'Dish-7', 7],
        [7, 'Dish-8', 11],
        [7, 'Beverage-4', 2],
        [8, 'Dish-30', 10],
        [9, 'Dish-21', 14],
        [9, 'Beverage-1', 3],
        [10, 'Dish-13', 9],
        [11, 'Dish-28', 15],
        [11, 'Beverage-3', 5],
        [12, 'Dish-4', 7],
        [13, 'Dish-29', 11],
        [13, 'Beverage-2', 4],
        [14, 'Dish-9', 9],
        [15, 'Dish-11', 12],
        [16, 'Dish-2', 10],
        [16, 'Beverage-4', 2],
        [17, 'Dish-22', 13],
        [18, 'Dish-6', 7],
        [19, 'Dish-26', 9],
        [19, 'Beverage-1', 3],
        [20, 'Dish-19', 15],
        [20, 'Beverage-3', 5]
    ];
    
    let tablesServed = new Set();
    let itemsServed = 0;
    let totalTurnover = 0.0;

    for(let i = 0; i < hardcodedOrders.length; i++) {
        const order = hardcodedOrders[i];
        const tableNumber = order[0];
        const itemName = order[1];
        const itemPrice = order[2];

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
const summary = waiterApplicationV3();

// Print the summary information:
console.log("\nOutput:");
console.log(`Tables served: ${summary.tablesServed}`);
console.log(`Items served: ${summary.itemsServed}`);
console.log(`Total turnover: $${summary.totalTurnover.toFixed(2)}`);

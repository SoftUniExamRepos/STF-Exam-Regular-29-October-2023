function waiterApplication() {
    // Hardcoded orders: [table number, dish number, dish price]
    const hardcodedOrders = [
        [1, 1, 1],
        [1, 2, 2],
        [2, 3, 3],
        [2, 1, 1],
        [3, 5, 5],
        [3, 2, 2],
        [4, 10, 10],
        [5, 4, 4],
        [5, 2, 2],
        [5, 1, 1],
        [6, 7, 7],
        [6, 8, 8],
        [7, 3, 3],
        [7, 6, 6],
        [8, 10, 10],
        [8, 9, 9],
        [9, 3, 3],
        [9, 5, 5],
        [10, 1, 1],
        [10, 2, 2]
    ];
    
    let tablesServed = new Set();
    let dishesServed = 0;
    let totalTurnover = 0.0;

    for(let i = 0; i < hardcodedOrders.length; i++) {
        const order = hardcodedOrders[i];
        const tableNumber = order[0];
        const dishNumber = order[1];
        const dishPrice = order[2];

        tablesServed.add(tableNumber);
        dishesServed += 1;
        totalTurnover += dishPrice;
    }

    // Print summary
    console.log("\nSummary:");
    console.log(`Tables served: ${tablesServed.size}`);
    console.log(`Dishes served: ${dishesServed}`);
    console.log(`Total turnover: $${totalTurnover.toFixed(2)}`);

    // Return summary information as an object
    const summaryInfo = {
        tablesServed: tablesServed.size,
        dishesServed: dishesServed,
        totalTurnover: totalTurnover
    };

    return summaryInfo;
}

// Call the function
const summary = waiterApplication();

// Print the summary information:
console.log("\nOutput:");
console.log(`Tables served: ${summary.tablesServed}`);
console.log(`Dishes served: ${summary.dishesServed}`);
console.log(`Total turnover: $${summary.totalTurnover.toFixed(2)}`);

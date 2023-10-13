function waiterApplicationV2() {
    // Hardcoded orders: [table number, dish number, dish price]
    const hardcodedOrders = [
        [1, 12, 10],
        [1, 15, 5],
        [2, 20, 15],
        [3, 1, 7],
        [3, 22, 12],
        [4, 25, 11],
        [5, 4, 6],
        [5, 10, 9],
        [6, 17, 10],
        [6, 8, 7],
        [6, 14, 8],
        [7, 2, 6],
        [7, 30, 12],
        [8, 33, 15],
        [9, 29, 14],
        [9, 31, 10],
        [10, 18, 6],
        [11, 3, 7],
        [11, 19, 13],
        [12, 21, 10],
        [12, 5, 5],
        [13, 23, 15],
        [13, 40, 9],
        [14, 41, 8],
        [15, 15, 7],
        [15, 2, 6],
        [15, 9, 10]
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
const summary = waiterApplicationV2();

// Print the summary information:
console.log("\nOutput:");
console.log(`Tables served: ${summary.tablesServed}`);
console.log(`Dishes served: ${summary.dishesServed}`);
console.log(`Total turnover: $${summary.totalTurnover.toFixed(2)}`);

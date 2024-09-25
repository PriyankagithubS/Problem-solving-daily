// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    // Parse the input
    let n = parseInt(userInput[0]);
    let heights = userInput[1].split(' ').map(Number);

    // Edge case: if there are less than 3 walls, no air can be trapped
    if (n < 3) {
        console.log(0);
        return;
    }

    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);
    let airTrapped = 0;

    // Fill leftMax array
    leftMax[0] = heights[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], heights[i]);
    }

    // Fill rightMax array
    rightMax[n - 1] = heights[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], heights[i]);
    }

    // Calculate the trapped air
    for (let i = 0; i < n; i++) {
        airTrapped += Math.max(0, Math.min(leftMax[i], rightMax[i]) - heights[i]);
    }

    console.log(airTrapped);
});

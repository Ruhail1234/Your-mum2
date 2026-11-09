// Simulating a heavy render-blocking script
console.log("Heavy script started parsing...");
const start = Date.now();
while (Date.now() - start < 600) {
    // Hard freeze the main thread for 600ms to simulate bad file performance
}
console.log("Heavy script finished executing.");

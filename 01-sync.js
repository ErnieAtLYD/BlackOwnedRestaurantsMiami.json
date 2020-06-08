const fs = require("fs");

// Run the synchronous CSV parser
const parse = require("csv-parse/lib/sync");

// Read the file synchronously as well.
// Start with just this. What do you get? Why do you think it happens this way?
// const data = fs.readFileSync("./BlackOwnedMiami.csv");

console.time("part-01");
const data = fs.readFileSync("./BlackOwnedMiami.csv", "utf-8");
// What does data contain now?
// console.log(data);

// Time to parse the data using that library
// Let's try this first. It looks closer to what we want to do but what doesn't work?
// const rows = parse(data);
// console.log(rows);

// That works. Let's go with that.
const rows = parse(data, { columns: true });

fs.writeFileSync("./01.json", JSON.stringify(rows));
console.log("01.json written successfully!");
console.timeEnd("part-01");

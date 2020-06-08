#!/usr/bin/env node
const fs = require("fs").promises;
const path = require("path");
const neatCSV = require("neat-csv");

const readCSV = async () => {
  try {
    // Can't do this - because I can run this CLI anywhere, and it'll look in the same directory where I called my app.
    // const jsonPath = "./BlackOwnedMiami.csv";

    const jsonPath = path.join(__dirname, "/BlackOwnedMiami.csv");
    const data = await fs.readFile(jsonPath, "utf8");
    const json = await neatCSV(data);
    const index = parseInt(Math.random() * json.length);
    const el = json[index];
    console.log(`${el.Name} (${el.Food})`);
    console.log(`${el.Address}`);
    if (el.Phone) console.log(`Telephone: ${el.Phone}`);
    if (el.Website) console.log(`Website: ${el.Website}`);
    if (el["Delivery Link"]) {
      console.log(`Delivery link: ${el["Delivery Link"]}`);
    }
    console.log("");
  } catch (e) {
    return console.error(e);
  }
};
readCSV();

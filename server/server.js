const express = require("express");

let FurnitureController = require('../controller/furnitureController');
let app = express();

app.use(express.static("./public"));
app.use(express.json());

app.route("/furniture").get(FurnitureController.getAllFurniture);
app.route("/sofas").get(FurnitureController.getAllSofas);
app.route("/furniture").post(FurnitureController.InsertFurniture);

app.listen(3030, "127.0.0.1");
console.log("Server running on port 3030");


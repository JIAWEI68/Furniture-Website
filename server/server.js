const express = require("express");

let FurnitureController = require('../controller/furnitureController');
let app = express();

app.use(express.static("./public"));
app.use(express.json());

app.route("/furniture").get(FurnitureController.getAllFurniture);
app.route("/sofas").get(FurnitureController.getAllSofas);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}
);


"use strict";

const furnitureDB = require('../database/furnitureDB');
const Furniture = require("../models/furniture");

let FurnitureDB = new furnitureDB();

function getAllFurniture(req, res) {
        FurnitureDB.getAllFurniture((err, result) => {
            if (err) {
                res.status(500).send();
            }
            else {
                res.status(200).send(result);
            }
        });
    }
function getAllSofas(req, res) {
        FurnitureDB.getSofas((err, result) => {
            if (err) {
                res.status(500).send();
            }
            else {
                res.status(200).send(result);
            }
        }
        )
    }

function InsertFurniture(req, res) {
    let furniture = new Furniture(1,req.body.name, req.body.description, req.body.ogCost, req.body.discCost, req.body.model, req.body.image, req.body.video, req.body.material, req.body.featuresCategory, req.body.features, req.body.featuresDetails, req.body.category, new Date());
    FurnitureDB.InsertFurniture(furniture, (err, result) => {
        if (err) {
            res.status(500).send();
        }
        else {
            res.status(200).send(result);
        }
    });
}


module.exports = {
    getAllFurniture,
    getAllSofas,
    InsertFurniture
};

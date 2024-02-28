"use strict";

const furnitureDB = require('../database/furnitureDB');
const furniture = require("../models/furniture");


function getAllFurniture(req, res) {
        furnitureDB.getAllFurniture((err, result) => {
            if (err) {
                res.status(500).send();
            }
            else {
                res.status(200).send(result);
            }
        });
    }
function getAllSofas(req, res) {
        furnitureDB.getSofas((err, result) => {
            if (err) {
                res.status(500).send();
            }
            else {
                res.status(200).send(result);
            }
        }
        )
    }


module.exports = {
    getAllFurniture,
    getAllSofas
};

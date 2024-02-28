"use strict";

var db = require("../server/connection");

class furnitureDB {
    getAllFurniture(callback) {
        let sql = "SELECT * FROM furniture AS A INNER JOIN furnitureFeatures AS B ON A.furniture_id = B.furniture_id";
        db.query(sql, callback);
    }
    getSofas(callback){
        let sql = "SELECT * FROM furniture AS A INNER JOIN furnitureFeatures ON A.furniture_id = B.furniture_id AND B.furniture_category = 'Sofa'"
        db.query(sql, callback)
    }
}

module.exports = furnitureDB;

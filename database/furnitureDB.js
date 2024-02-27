"use strict";

var db = require("../connection");

class furnitureDB {
    getAllFurniture(callback) {
        let sql = "SELECT * FROM  AS A INNER JOIN  AS B ON A.furniture_id = B.furniture_id";
        db.query(sql, callback);
    }
    getSofas(callback){
        let sql = "SELECT * FROM  AS A INNER JOIN  AS B ON A.furniture_id = B.furniture_id AND B.furniture_category = 'Sofa'"
        db.query(sql, callback)
    }
}

module.exports = furnitureDB
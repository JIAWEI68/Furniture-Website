"use strict";

let db = require("../server/connection");

class FurnitureDB {
    getAllFurniture(callback) {
        let sql = "SELECT * FROM furniture AS A INNER JOIN furnitureFeatures AS B ON A.id = B.id";
        db.query(sql, callback);
    }
    getSofas(callback){
        let sql = "SELECT * FROM furniture AS A INNER JOIN furnitureFeatures ON A.id = B.id AND A.category = 'Sofa'"
        db.query(sql, callback)
    }
    InsertFurniture(furniture, callback){
        let { name, description, ogCost, discCost, model, image, video, material, featuresCategory, features, featuresDetails, category } = furniture;
        let sql = "PREPARE furniture(name, description, ogCost, discCost, model, image, video, material, category, createdDate) AS INSERT INTO furniture (name, description, ogCost, discCost, model, image, video, material, category, createdDate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10); EXECUTE furniture(?, ?, ?, ?, ?, ?, ?, ?, ?, ?); PREPARE furnitureFeatures(id, featuresCategory, features, featuresDetails, category) AS INSERT INTO furnitureFeatures (id, featuresCategory, features, featuresDetails) VALUES ((SELECT id FROM furniture WHERE createdDate = $10), $11, $12, $13); EXECUTE furnitureFeatures(id,?,?,?);";
        db.query(sql,[
            name,
            description,
            ogCost,
            discCost,
            model,
            image,
            video,
            material,
            category,
            new Date(),
            featuresCategory,
            features,
            featuresDetails
        ],callback)
    }
}

module.exports = FurnitureDB;

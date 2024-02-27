"use strict"

class furniture{
    constructor(
        furniture_id,
        furniture_name, 
        furniture_description,
        original_cost,
        discounted_cost,
        furniture_model,
        furniture_image,
        furniture_video,
        furniture_material,
        created_date,
        features_category,
        features,
        features_details,
        furniture_category
    )
    {
        this.furniture_id = furniture_id;
    }
    getFeatures(){
        return this.features
    }
}
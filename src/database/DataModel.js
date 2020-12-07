const mongo = require("mongoose");

const DataSchema = new mongo.Schema({
    uploadDate: {
        type: Date,
        default: Date.now()
    },
    fields: [],
    data: [],
    originalData : []
})


module.exports = mongo.model("Data", DataSchema);
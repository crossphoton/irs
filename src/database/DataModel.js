const mongo = require("mongoose");

const DataSchema = new mongo.Schema({
    uploadDate: {
        type: Date,
        default: Date.now()
    },
    fields: [],
    data: [],
    originalData : [],
    expire_at: {
        type: Date,
        default: Date.now(),
        expires: 7200*12
    }
})


module.exports = mongo.model("Data", DataSchema);
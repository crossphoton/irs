const mongo = require("mongoose");

const DataSchema = new mongo.Schema({
    uploadDate: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongo.model("Data", DataSchema);
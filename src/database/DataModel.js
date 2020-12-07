const mongo = require("mongoose");

const DataSchema = new mongo.Schema({
    uploadDate: {
        type: Date,
        default: Date.now()
<<<<<<< HEAD
    }
=======
    },
    fields: [],
    data: [],
    originalData : []
>>>>>>> 6292ba7603c5f890b67a09cea51e0516458a3b89
})


module.exports = mongo.model("Data", DataSchema);
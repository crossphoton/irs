const { mongo } = require("mongoose");
const DataModel = require("./DataModel");

async function addData(preprocessed, original, fields){
    
    var dataEntry = new DataModel({
        fields,
        originalData : original,
        data: preprocessed
    });

    try{
        dataEntry.save();
        return dataEntry._id;
    } catch(err) {console.log(err);}
}

function getData(documentId, res){
    
    if(mongo.ObjectID.isValid(documentId))
        DataModel.findOne({_id: documentId}, {__v:0}, (err, document)=>{
            if(err){
                res.sendStatus(500);
                throw err;
            }
            res.json(document);
        })
    else res.sendStatus(400);
}

module.exports = {addData, getData};
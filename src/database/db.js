const DataModel = require("./DataModel");

function addData(preprocessed, original, fields){
    
    var dataEntry = new DataModel({
        fields,
        originalData : original,
        data: preprocessed
    });

    try{
        dataEntry.save();
    } catch(err) {console.log(err);}
}

function getData(id){
    console.log("You can get data here.");
}

module.exports = {addData, getData};
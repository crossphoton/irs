const DataModel = require("./DataModel");

<<<<<<< HEAD
function addData(data){
    console.log("You can save data here");
=======
function addData(preprocessed, original, fields){
    
    var dataEntry = new DataModel({
        fields,
        originalData : original,
        data: preprocessed
    });

    try{
        dataEntry.save();
    } catch(err) {console.log(err);}
>>>>>>> 6292ba7603c5f890b67a09cea51e0516458a3b89
}

function getData(id){
    console.log("You can get data here.");
}

module.exports = {addData, getData};
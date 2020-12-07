const { addData } = require("../database/db");

<<<<<<< HEAD
const databaseFunctions = require("../database/db").addData;

module.exports = function (original, preprocessed){
    console.log("This is processing");
    addData("");
=======
class Field{
    name;
    type;
    criterias = [];
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
}

module.exports = function (original, preprocessed){

    var fields = [];

    for(var item in preprocessed[0]){
        var type = typeof("String");
        if(!isNaN(parseInt(preprocessed[0][item]))) type = typeof(1);
        const field = new Field(item, type);
        fields.push(field);
    }

    for(var field in fields){

        var criterias = new Set();

        for(var item in preprocessed){
            if(fields[field].type == "number")
                criterias.add(parseInt(preprocessed[item][fields[field].name]))
            else
                criterias.add(preprocessed[item][fields[field].name]);
        }

        fields[field].criterias = Array.from(criterias);
    }

    addData(preprocessed, original, fields);
>>>>>>> 6292ba7603c5f890b67a09cea51e0516458a3b89
}
const { addData } = require("../database/db");

const databaseFunctions = require("../database/db").addData;

module.exports = function (original, preprocessed){
    console.log("This is processing");
    addData("");
}
const processing = require("./processing");

module.exports = function(array){

    var copy = JSON.parse(JSON.stringify(array));

    for(var object in copy)
    {
        for(var property in copy[object])
        {
            if(copy[object][property] == undefined) copy[object][property] = "";
            else{
                copy[object][property] = String(copy[object][property]).toLowerCase()
                            .replace(/,/g,'')
                            .replace(/\s/g,'')
                            .replace(/[\[\]]/g,'')
                            .replace(/[{()}]/g,'')
                            .replace(/[!#@$%^&*_+=]/g,'')
                            .replace(/\/\\/g,'')
                            .replace(/-/g,'')
                            .replace('.', '')
                            .replace("\"",'')
                            .replace("\'",'');
            }
        }
    }

    return processing(array, copy);
    
    return copy
}
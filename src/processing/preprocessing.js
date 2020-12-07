const processing = require("./processing");

module.exports = function(array){

    var copy = JSON.parse(JSON.stringify(array));

    for(var object in copy)
    {
        for(var property in copy[object])
        {
<<<<<<< HEAD
           copy[object][property] = copy[object][property].toLowerCase()
                    .replace(/,/g,'')
                    .replace(/\s/g,'')
                    .replace(/[\[\]]/g,'')
                    .replace(/[{()}]/g,'')
                    .replace(/[!#$%^&*_+=]/g,'')
                    .replace(/\/\\/g,'')
                    .replace(/-/g,'')
                    .replace(".", "");
=======
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
>>>>>>> 6292ba7603c5f890b67a09cea51e0516458a3b89
        }
    }

    processing(array, copy);
    
    return copy
}
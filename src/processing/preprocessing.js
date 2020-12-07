module.exports = function(array)
{
    /*for(var object in array)
    {
        for(var property in object)
        {
            console.log(property);
        }
    }*/
    var copy = JSON.parse(JSON.stringify(array));

    for(var object in copy)
    {
        for(var property in copy[object])
        {
           // console.log(copy[object][property]);
           copy[object][property] = copy[object][property].toLowerCase();
          copy[object][property] = copy[object][property].replace(/,/g,'');
         /* var removeChar = [" " , "," , "."];
          for(var char in removeChar)
          {
              copy[object][property] = copy[object][property].replace("ReGeX" + removeChar[char] + "ReGeX", '');
          }*/
          copy[object][property] = copy[object][property].replace(/\s/g,'');
          copy[object][property] = copy[object][property].replace(/[\[\]]/g,'');
          copy[object][property] = copy[object][property].replace(/[{()}]/g,'');
          copy[object][property] = copy[object][property].replace(/[!#$%^&*_+=]/g,'');
          copy[object][property] = copy[object][property].replace(/\/\\/g,'');
          copy[object][property] = copy[object][property].replace(/-/g,'');
          //copy[object][property] = copy[object][property].replace(//g,'');
        }
    }
   // console.log("This is copy :\n");
   // console.log(copy);
    
    return copy
}
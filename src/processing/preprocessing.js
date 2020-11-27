function csvconvert(){
        const csvFilePath='uploads'
        const csv=require('csvtojson')
        csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            console.log(jsonObj);
        })
        const jsonArray=await csv().fromFile(csvFilePath);
}
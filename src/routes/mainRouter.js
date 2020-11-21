const router = require("express").Router();



router.get("/", (req, res)=>{
    res.send("Hello from touter");

    console.log("test succ");
})


module.exports = router;
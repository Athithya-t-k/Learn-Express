const express = require('express')
const app = express()
const path = require('path')
const port = 6000
app.listen(port,()=>{
    console.log("server unning on the port " + port);
})
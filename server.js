const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "upload/");
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.use(express.static("public"));

app.post("/upload", upload.single("image"), (req, res)=>{
    res.send("Image uploaded successfully");
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});

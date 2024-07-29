import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const _dirname=dirname(fileURLToPath(import.meta.url));

const app= express();

const port=3000;

app.use(express.static(_dirname + '/public'));

app.get("/",(req,res)=>{
    res.sendFile(_dirname+"/index.html");
})
app.post("/submitnew", (req, res) => {
    res.sendFile(_dirname+"/create.html");
  });
  app.post("/calender", (req, res) => {
    res.sendFile(_dirname+"/calender.html");
  });
app.listen(port,()=>{
 console.log(`server on port ${port}`);
})
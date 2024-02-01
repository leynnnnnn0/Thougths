import express from "express";
const route = express.Router();
import Thougths from "../model/ThoughtsModel.js";


route.get("/test", async (req, res) => {
    try {
        res.json("hello");
    } catch (err) {
        res.json(err);
    }
})

route.post("/testPost", async (req, res) => {
    try {
        const thougth = new Thougths({publisher: "nathaniel", note: "This is a test only"});
        await thougth.save();
        res.send("added");
    } catch (err) {
        res.send(err);
    }
    
}) 

export default route;
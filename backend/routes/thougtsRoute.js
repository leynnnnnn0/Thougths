import express from "express";
const route = express.Router();
import Thougths from "../model/ThoughtsModel.js";


route.post("/display", async (req, res) => {
    try {
        const result = await Thougths.find({});
        res.send(result)
    } catch (err) {
        res.json(err);
    }
})

route.post("/addnote", async (req, res) => {
    const { title, note, publisher } = req.body;
    try {
        const thougth = new Thougths({
          title: title,
          note: note,
          publisher: publisher,
        });
        await thougth.save();
        res.send("added");
    } catch (err) {
        res.send(err);
    }
    
}) 

route.put("/updatenote", async (req, res) => {
    const { _id, title, note, publisher } = req.body;
    try {
        await Thougths.findByIdAndUpdate(_id, {
          title: title,
          note: note,
          publisher: publisher,
        });
        res.send("Updated!")
    } catch (err) {
        res.send(err)
    }
})

route.delete("/delete", async (req, res) => {
    const { _id } = req.body;
    try {
        await Thougths.findByIdAndDelete(_id);
        res.json({ message: "deleted" });
    } catch (err) {
        res.send(err)
    }
})


export default route;
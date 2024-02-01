import mongoose from "mongoose";

const connectionDB = async (DATA_BASE_URL) => {
    try {
        await mongoose.connect(DATA_BASE_URL);
        console.log("Connected to database.")
    } catch (err) {
        console.log(err);
    }
}

export default connectionDB;
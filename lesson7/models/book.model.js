import { model, Schema } from "mongoose";

const bookSchema = new Schema({
    name: String,
    price: Number,
    categories: [String],
    auther:{name:String,phone:String,email:String}
});

export default model('book', bookSchema);
import mongoose, {Schema} from "mongoose"



const itemSchema = new Schema({
    item_name: {
        type: String,
        required: true,
    },
    cuisine: {
        type: String,
        enum: ["indian", "chinese","italian"],
    },
    food_type: {
        type: String,
        enum: ["veg", "non-veg"],
    },
    price: {
        type: Number,
        required: true,
    },
    thumb: {
        type: String,
        required: true
    },
    rating:{
        type : Number,
        default: 0
    },
    type:{
        type:String,
        required:true,
    }
},
{
    timestamps: true
}
)


export const Item = mongoose.model("Item", itemSchema)
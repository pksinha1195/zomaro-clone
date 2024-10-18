import mongoose from "mongoose"

const restaurantSchema=new mongoose.Schema({
    res_name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        index: true,
    },
    description: {
        type: String,
        required: true,
    },
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref: Address,
    },
    cuisine:{
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    costfortwo: {
        type: Number,
        required: true,
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Item,
    }],
    mobile_no: {
        type: Number,
        required: true,
    },
    rating: {
        type: String,
        default: 0,
    }
},
{
    timestamps: true
}
)


export const Restaurant = mongoose.model("Restaurant" , restaurantSchema)
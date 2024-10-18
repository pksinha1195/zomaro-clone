import mongoose from "mongoose"



const addressSchema = new mongoose.Schema({
    state: {
        type: String,
        required: true,
    },
    distric: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    locality: {
        type: String,
        required: true,
    },
    pin_code: {
        type: Number,
        required: true,
    }    
},
{
    timestamps: true
}
)

export const Address = mongoose.model("Address", addressSchema)
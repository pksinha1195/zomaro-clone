import mongoose, {Schema} from "mongoose"



const ownerSchema = new Schema ({
    email: { 
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
    },
},
{
    timestamps: true
}
) 

export const Owner = mongoose.model("Owner", ownerSchema)
import mongoose, {Schema} from "mongoose"



const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
},
{
    timestamps: true
}
)

export const Admin = mongoose.model("Admin", adminSchema )
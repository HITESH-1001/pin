const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    description: String,
    title: String,
    image: String,


})

module.exports = mongoose.model("post", postSchema)
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userCollection: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
  ],
},
{ timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
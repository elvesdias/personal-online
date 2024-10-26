const mongoose = require("../database/conn");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["admin", "aluno"],
      required: true,
      default: ''
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      default: ''
    },
    avatar: {
      type: String,
    },
    historicos: {
      type: Array,
    },
    alunos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: ''
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

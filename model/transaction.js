const { Schema, model  } = require("mongoose");


const TransactionSchema = new Schema({
description: {
type: String,
require: true,
trim: true,
},
type: {
type: String,
require: true,
enum: ["inc", "exp"],
index: true

},
amount: {
type: Number,
require: true,
trim: true,

},
balance: {
type: Number,
default: 0.0
}

},{timestamps: true} );

const TransactionModel = model("Transaction", TransactionSchema);
module.exports = TransactionModel;
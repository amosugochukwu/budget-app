const TransactionModel = require("../model/transaction");

exports.newtransaction = async (req, res) => {
try{
const {description, type, amount} =req.body;

// data validation
if (!description) throw new Error("Description is required")
if (!amount) throw new Error("Transaction type is required")
if (!type) throw new Error("Transaction type is required")
if (type !== "inc" && type !== "exp") throw new Error
("Invalid transaction type")
if (!amount) throw new Error("Transaction amount is required")
if (!amount < 0) throw new Error("Transaction amount cannot be negative")
// check transaction type
// 1. if it is income (inc), add the amount to the balance
const transaction = await TransactionModel.findOne({}).
sort({createdAt: -1});
if(type === "inc"){
 const balance =transaction ? transaction.balance
 + amount : amount;
 const newtran = await TransactionModel.create
 ({description, type, amount, balance});

}else{
 const balance =transaction ? transaction.balance
 - amount : -amount;
 const newtran = await TransactionModel.create
 ({description, type, amount, balance});

}
// 2. if it is expense (exp), then subtract the amount from the balance
res.status(201).json({message: "New Transaction created successfully"});


} catch (error) {
    res.status(400).json({message: error.message});
}

}
exports.getAllTransaction = async (req, res) => {
try{
const transactions = await TransactionModel.find({}).sort({updatedAt: 
 -1}).select("-__v");
if(!transactions || transactions.length === 0) return res.status(404).json
({success: true, message: "NO record found"});
res.status(200).json({success: true, message: "Found", transactions})
} catch (error){
 res.status(400).json({error: error.message})
}
}
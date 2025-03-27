const { newtransaction, getAllTransaction } = require("../controller/handler");

const appRouter =require("express").Router();
appRouter.get("/status",(req,res)=>{
res.send({message:"yes! API is running"});
})
appRouter.post("/transaction",newtransaction);
appRouter.get("/transaction", getAllTransaction);

module.exports = appRouter;
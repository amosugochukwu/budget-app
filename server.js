const express= require(`express`);
const approuter = require("./routes");
const { connect } = require("mongoose");
const app =express();
require(`dotenv`).config();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api", approuter);
app.listen(process.env.PORT||3000,()=>{
try{
console.log("connecting database...");
connect(process.env.DB_URL);
console.log("Database connected...");

console.log(`server is running on port ${process.env.PORT||3000}`);
}catch(error){
console.log(error);
process.exit(-1);
}
})








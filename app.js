require("dotenv").config();
const express = require("express")
const app = express()

const ConnectDb = require("./db/connection")
const PORT = process.env.PORT || 4000;

app.use(express.json());

 const product_routes = require("./routes/products")
 const categoreis_rotes = require("./routes/categories")

//routing
app.get("",(req,res)=>{
res.send("Welcom")
})

 app.use('/api/products', product_routes);
 app.use('/api/categoreis', categoreis_rotes);

const main = async ()=>{
await ConnectDb(process.env.MONGODB_URL);
}

main()


//port connection

app.listen(PORT,()=>{
            console.log('port connected')
        })

//GNzF1PvCfTlIowFk
//imvyankat45
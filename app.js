const express = require("express")
const mongoose = require("mongoose")
const yeedRoutes = require("./routes/yeedroutes")

const app = express();
app.use(express.static('public'))


//add database connection here url
const dbUser = ""

//database Connection
mongoose.connect(dbUser).then((result) => {
    console.log("Connected To Database");
    app.listen(3000);
}).catch((err)=>{console.log(err)})


app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended:true}))


app.get('/', (req,res)=>{

    res.redirect('/yeeds');
});

app.get('/about', (req,res)=>{

    res.render("aboutus" ,  {title : "About Us"});
});

app.get('/aboutus', (req,res)=>{
    res.redirect("./about");
});

app.use('/yeeds' , yeedRoutes)

app.get("/*" , (req,res)=>{
    res.render("404" , {title : "Not Found"});
})
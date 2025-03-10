const Yeed = require("../model/yeed")

yeed_index = (req,res)=>{
    Yeed.find()
        .then ((result) =>{
            res.render("yeeds" , {title:"Yeeds" , yeeds : result});
        }).catch((err)=> console.log(err))
}

yeed_details = (req,res)=>{
    const id = req.params.id;
    Yeed.findById(id)
        .then((result)=>{
            res.render("yeeddetails", {title: result.title , yeed:result})
        })
        .catch((err)=>{
            res.render("404" , {title : "BOO"})
        })
}

yeed_delete = (req,res)=>{
    const id = req.params.id;
    Yeed.findByIdAndDelete(id)
        .then((result)=>{
            res.json({redirect : '/yeeds'})
        })
        .catch((err)=>console.log(err))
}

yeed_save = (req,res) =>{
    const yeed = new Yeed(req.body)

    yeed.save()
        .then((result)=>{
            res.redirect("/yeeds")
        })
        .catch((err)=>console.log(err))
}

yeed_add =  (req,res)=>{
    res.render("addyeed" ,  {title : "Add Yeed"});
}

module.exports = {
    yeed_index,
    yeed_details,
    yeed_delete,
    yeed_save,
    yeed_add,
}
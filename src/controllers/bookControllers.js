
const BookModel= require("../models/bookModel1")

const createBook= async function (req, res) {
    let data= req.body

    let savedBook= await BookModel.create(data)
    res.send({msg: savedBook})
}
const allBooklist = async function (req,res){
    let data = req.body

    let book = await BookModel.find().select({bookName:1, authorName:1, _id:0}) 
    res.send({msg: book})
}
const yearDetails = async function (req,res) {

    let data = req.body.year

    let yearList= await BookModel.find({year:{$eq:data}}).select({bookName:1,_id:0})

    res.send({msg:yearList})
}
const particularBooks= async function (req,res){

    let specificBooks=await BookModel.find(req.body)
    res.send({msg:specificBooks})

}
const priceDetails=async function(req,res){

    let list =await BookModel.find({"prices.indianPrice":{$in:["100INR","200INR","500INR"]}}).select({bookName:1, _id:0})
    res.send({msg:list})
}
const randomBooks=async function (req,res){


    let allBooks=await BookModel.find({$or:[{stockAvailable:true},{totalPage:{$gt:500}}]})
    res.send({msg:allBooks})
}

module.exports.createBook= createBook
module.exports.allBooklist= allBooklist
module.exports.yearDetails= yearDetails
module.exports.particularBooks=particularBooks
module.exports.priceDetails =priceDetails
module.exports.randomBooks =randomBooks
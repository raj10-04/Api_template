const express = require('express')
const axios = require('axios')
const app=express.Router()
const moment = require('moment')
const math = require('math')

app.get('/',async(req,res)=>{
    try{
        const url = ;
        const app_get =await axios.get(url)
        // res.render('news',{articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

app.post('/search',async(req,res)=>{
    const search=req.body.search
    //console.log(req.body.search)


    try {
        var url = ``;

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})





    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})


app.get

module.exports=app
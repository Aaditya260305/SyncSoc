const express = require('express')
const router = express.Router()

const events = require('../models/Event_register')

router.post("/event_register" , async (req, res) => {

    console.log(req.headers)

    const venue = req.body.venue
    const date = req.body.date
    const short_description = req.body.short_description 
    const fee = req.body.fee
    const time = req.body.time
    const remarks = req.body.remarks
    const name = req.body.name 
    const image_url = req.body.image_url 

    if(!venue || !date || !short_description || !fee || !time || !name){
        return res.status(400).json({message : "All fields are required"})
    }

    console.log(req.user)

    const society = req.user.email.split("@")[0] 

    const newevent = new events({name : name , society:society , venue : venue , date : date, short_description : short_description, fee : fee , time : time, remarks : remarks ,  image_url : image_url})
    await newevent.save()

    return res.status(200).json(newevent)

})

module.exports = router 
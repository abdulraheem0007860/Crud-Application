const express = require('express');
const router = express.Router();
const User = require("../models/userSchema")



router.post("/register", async (req, res) => {

    const { name, email, age, mobile, work, address, description } = req.body;

    if (!name || !email || !age || !mobile || !work || !address || !description) {
        res.status(422).json("plz fill the data");
    }

    try {

        // console.log(req.body)
        const preuser = await User.findOne({ email: email });

        if (preuser) {
            res.status(422).json("this is user is already present");
        } else {
            const adduser = new User({
                name, email, age, mobile, work, address, description
            });

            await adduser.save();
            res.status(201).json(adduser);
            // console.log(adduser);
        }

    } catch (error) {
        // res.status(422).json(error);
        console.log(error)
    }
})

//getUser
router.get("/getdata", async (req, res) => {
    try {
        const Userdata = await User.find();
        res.status(201).json(Userdata)
        console.log(Userdata);
    } catch (error) {
        res.status(404).json(error);
    }
})
//get individual user

router.get("/getuser/:id", async (req, res) => {
    try {
        // console.log(req.params);
        const {id} = req.params;
        const Userindividual = await User.findById({_id:id})
        // console.log(Userindividual);
        res.status(201).json(Userindividual)
    } catch (error) {
        res.status(422).json(error)
    }
})

//update user
router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await User.findByIdAndUpdate(id,req.body,{
            new:true
        });
       // console.log("someuser",id)
        // console.log("someuser",req.body);
        res.status(201).json(updateduser);

    } catch (error) {

        res.status(422).json(error);
    }
})
//delete user
router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await User.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
})




module.exports = router;
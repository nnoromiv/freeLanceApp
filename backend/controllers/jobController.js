import Job from "../models/jobModel.js";
import asyncHandler from 'express-async-handler'
import Profile from '../models/profileModel.js'

const Addjob = asyncHandler(async(req, res) => {
    const { id, maintitle, category1, category2, days, price} = req.body;
    const job  = await Job.create({
        id, maintitle, category1, category2, days, price
    })
    if (job){
        res.json(job)
    } else {
        res.status(404)
        throw new Error('Invalid Data')
    }
})

const getjobbyuser = asyncHandler( async(req, res) => {
    const userid = req.params.id
    const jobs = await Job.find({id: `${userid}`})
    if (jobs){
        res.json(jobs)
    }else {
        res.status(404)
        throw new Error(' job not found')
    }
})

const buyerRelatedJob = asyncHandler(async(req, res) => {
    const userid = req.params.id 
    const user = await Profile.findOne({ user: `${userid}`})
    if (user){
        const category = user.skillCategory 
        const skill = user.skill 
        const jobs = await Job.find({ category: `${category}`, category2: `${ skill}`})
        if (jobs) {
            res.json(jobs)
        }
    }else{
        res.status(404)
        throw new Error('No Job found')
    }
})

export  { getjobbyuser, Addjob, buyerRelatedJob}
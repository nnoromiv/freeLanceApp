import mongoose  from "mongoose";
import dotenv from 'dotenv'
import users from './data/userData.js'
import gigs from './data/gigData.js'
import profile from './data/profileData.js'
import Profile from './models/profileModel.js'
import User from './models/userModel.js'
import Gig from './models/gigModel.js'
import connectDB from './config/db.js'


dotenv.config()


connectDB()


const importData = async() =>{
    try{
        await Gig.deleteMany()
        await User.deleteMany()

        const createUser = await User.insertMany(users)
        const admin = createUser[1]._id
        const samplegig = gigs.map( g => {
            return {
                ...g, user:admin
            }
        })
        const sampleprofile = profile.map( p => {
            return {
                ...p, user:admin
            }
        })
        const createGigs = await Gig.insertMany(samplegig)
        const createProfile = await Profile.insertMany(sampleprofile)
        console.log('Data is inserted to DB')
        process.exit()
    }
    catch(error){
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async() => {
    try {
        await Gig.deleteMany()
        await User.deleteMany()
        await Profile.deleteMany()
        console.log('Data Destroyed')
        process.exit()
    }
    catch(error){
        console.error(`${error}`)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
} else {
    importData()
}
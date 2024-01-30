import mongoose from 'mongoose'

const gigSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    categoryone:{
        type: String,
        required: true,
    },
    categorytwo:{
        type: String,
        required: true,
    },
    servicetype:{
        type: String,
        required: true,
    },
    metadata:{
        type: String,
        required: false,
    },
    searchtag: [{
        type: String,
        required: true,
    }],
    pkgname: [{
        name:{
            type: String,
            required: true
        }
    }],
    pkgdescription: [{
        description:{
            type: String,
            required: true
        }
    }],
    deliverytime: [{
        days:{
            type: String,
            required: true
        }
    }],
    numofpages: [{
        pagesnum:{
            type: String,
            required: true
        }
    }],
    numofproducts: [{
        productsnum:{
            type: String,
            required: false
        }
    }],
    customization: [{
        name:{
            type: Boolean,
            required: false
        }
    }],
    responsivedesign: [{
        name:{
            type: Boolean,
            required: true
        }
    }],
    contentupload: [{
        name:{
            type: Boolean,
            required: true
        }
    }],
    revisions: [{
        name:{
            type: String,
            required: true
        }
    }],
    price: [{
        name:{
            type: Number,
            required: true
        }
    }],
    image:{
        type: String,
        required: true
    },
})
const Gig = mongoose.model('Gig', gigSchema)

export default Gig

const User = require('../models/user_model')
const httpRequestText = require('../utils/HttpRequestText')

const getUsers = async (req, res)=>{
    const query = req.query
    const limit = query.limit || 10
    const page = query.page || 1
    const skip = (page-1)*limit

    const users = await User.find({}, {__v: false}).limit(limit).skip(skip) 
    res.json({status: httpRequestText.SUCCESS, data:{users}})
}

const register = (req, res)=>{

}

const login = (req, res)=>{

}

module.exports = {
    getUsers,
    register,
    login
}
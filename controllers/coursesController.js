
const Course = require('../models/course_model')
const httpRequestText = require('../utils/HttpRequestText')

const getCourses = async (req, res)=>{
    const query = req.query
    const limit = query.limit || 10
    const page = query.page || 1
    const skip = (page-1)*limit

    const courses = await Course.find({}, {__v: false}).limit(limit).skip(skip) 
    res.json({status: httpRequestText.SUCCESS, data:{courses}})
}

const getCourse = async (req, res)=>{
    try{
        const course = await Course.findById(req.params.course_id)
        if(!course){
            res.status(404).json({status: httpRequestText.FAIL, data: {course: "Course not found"}})
        }
        res.status(200).json({status: httpRequestText.SUCCESS, data: {course}})
    }
    catch(err){
        res.status(400).json({status: httpRequestText.ERROR, data: null, message: "Invalid object id"})
    }
}

const storeCourse = async(req, res)=>{
    const new_course = new Course(req.body)
    await new_course.save()
    
    res.status(201).json({status: httpRequestText.SUCCESS, data: {new_course}})
}

const updateCourse = async(req, res)=>{
    const id = req.params.course_id
    const updateCourse = await Course.findByIdAndUpdate(id, {$set: {...req.body}})

    return res.json(200).json({status: httpRequestText.SUCCESS, data:  {updateCourse}})
} 

const deleteCourse = async(req, res)=>{
    const data = await Course.deleteOne({_id: req.params.course_id});
    res.status(200).json({success: httpRequestText.SUCCESS, data: null});
}

module.exports = {
    getCourses,
    getCourse,
    storeCourse,
    updateCourse,
    deleteCourse
}
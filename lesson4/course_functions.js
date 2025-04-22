const Course = require("./course");
//2
function addCourse(course) {
    const newCourse = new Course(course);
    return newCourse.save();
}
//3
function countCourses() {
    return Course.countDocuments({});
}
//4
function getAllCourses() {
    return Course.find({});
}
//5
function getCourseById(id) {
    return Course.find({ _id: id });
}
//6
function getBAAndServer() {
    return Course
        .find({ isForBA: true, topics: { $in: ["Server"] } }, { name: 1, teacher: 1 })
        .sort({ name: -1 })
}
//7
function getServerOrClient() {
    return Course
        .find({ topics: { $in: ["server", "client"] } }, { name: 1, teacher: 1 })
        .sort({ price: 1 })
}
//8
function get15$OrString() {
    return Course
        .find({ $or: [{ price: { $gt: 15 } }, { name: '/וה/' }] })
}
//9
function updateCourse(id, isForBA) {
    return Course.updateOne({ _id: id }, { $set: { isForBA: isForBA } });
}
//10
function deleteCourses() {
    return Course.deleteMany({ price: 0 });
}
module.exports = {
    addCourse,
    countCourses,
    getAllCourses,
    getCourseById,
    getBAAndServer,
    getServerOrClient,
    get15$OrString,
    updateCourse,
    deleteCourses
};
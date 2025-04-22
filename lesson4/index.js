const {
    addCourse,
    countCourses,
    getAllCourses,
    getCourseById,
    getBAAndServer,
    getServerOrClient,
    get15$OrString,
    updateCourse,
    deleteCourses
} = require('./course_functions')
const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/courses")
    .then(() => {
        console.log("Connected to MongoDB");
        addCourse({
            name: "Node.js",
            price: 20,
            topics: ["server", "backend"],
            teacher: "John Doe",
            date: new Date("2024-01-01"),
            isForBA: true
        })
            .then(() => {
                addCourse({
                    name: "יוהיעךכל",
                    price: 100,
                    topics: ["server", "client"],
                    teacher: "John Doe",
                })
                    .then(() => {
                        addCourse({
                            name: "React",
                            price: 50,
                            topics: ["backend"],
                            date: new Date("2024-01-01"),
                        })
                            .then(() => {
                                addCourse({
                                    name: "C#",
                                    price: 150,
                                    topics: ["backend"],
                                    teacher: "John Doe",
                                    date: new Date("2024-01-01"),
                                    isForBA: true
                                })
                                    .then(() => {
                                        addCourse({
                                            name: "Python",
                                            price: 70,
                                            topics: ["server", "client"],
                                        })
                                            .then(() => {
                                                console.log("Course added");
                                                countCourses();
                                                getAllCourses();
                                                getCourseById("63f8b8e4c9d1a2b3c4d5e6f7");
                                                getBAAndServer();
                                                getServerOrClient();
                                                get15$OrString();
                                                updateCourse("63f8b8e4c9d1a2b3c4d5e6f7", true);
                                                deleteCourses();
                                            })
                                            .catch((err) => console.error("Error adding course", err));
                                    })
                                    .catch((err) => console.error("Error adding course", err));
                            })
                            .catch((err) => console.error("Error adding course", err));
                    })
                    .catch((err) => console.error("Error adding course", err));
            })
            .catch((err) => console.error("Error adding course", err));
    })
    .catch((err) => {
        console.error("Could not connect to MongoDB", err);
    });

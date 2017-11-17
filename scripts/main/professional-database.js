let homeDatabase = require("../home/home-database")
let blogDatabase = require("../blog/blogs-database")
let projectsDatabase = require("../projects/projects-database")
let resumeDatabase = require("../resume/resume-database")
let contactDatabase = require("../contact/contact-database")


let professionalDatabase = {
    "home": homeDatabase,
    "blog": blogDatabase,
    "projects": projectsDatabase,
    "resume": resumeDatabase,
    "contact": contactDatabase
}

module.exports = professionalDatabase



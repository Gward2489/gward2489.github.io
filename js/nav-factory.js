let homeTab = {
    "tabName": "Home",
    "linkName": "./index.html",
    "className": "homeNav"
}

let blogTab = {
    "tabName": "Blog",
    "linkName": "./blog.html",
    "className": "blogNav"
}

let projectTab = {
    "tabName": "Projects",
    "linkName": "./projects.html",
    "className": "projectNav"
}

let resumeTab = {
    "tabName": "Resume",
    "linkName": "./resume.html",
    "className": "resumeNav"
}

let contactTab = {
    "tabName": "Contact",
    "linkName": "./contact.html",
    "className": "contactNav"
}

let navArray = [contactTab, homeTab, blogTab, resumeTab, projectTab]

let navString = JSON.stringify(navArray) 
localStorage.setItem("navString", navString)
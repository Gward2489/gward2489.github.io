// Projects in objects

let jsGithub = {
    "title": "My javascript projects on github:",
    "link": "https://github.com/Gward2489/javascript"
}

let cssGithub = {
    "title": "My CSS projects on github:",
    "link": "https://github.com/Gward2489/CSS"  
}

let homeGithub = {
    "title": "The source code for this website:",
    "link": "https://github.com/Gward2489/gward2489.github.io"
}

// Store multiple project objects into one object 

let gitProjects = [jsGithub, cssGithub, homeGithub]


// Stringify projects object and store in local storage

let projectsString = JSON.stringify(gitProjects)
localStorage.setItem("projects", projectsString)
// Call projects from local storage and parse them back into an object

let projects = JSON.parse(localStorage.getItem("projects"))

// Create variable with location for DOM html injection

let projectsMarker = document.getElementById("projectsId")

// Loop to iterate through project object and print to DOM

for (let i = 0; i < projects.length; i++) {
    let currentProject = projects[i]
    projectsMarker.innerHTML += `
    <article class="article">
    <p>${currentProject.title}<br>
    <a href="${currentProject.link}">Click here to see my project</a>
    </p>
    </article>
    `
}
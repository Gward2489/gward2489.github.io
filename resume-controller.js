// Call resume from local storage and parse back into object

let storedResume = JSON.parse(localStorage.getItem("resume"))

// Create a variable with location for DOM html injection 

let resumeLocation = document.getElementById("resumeSpot")

// Loop to iterate objects and print them to DOM

for (job in storedResume) {
    let currentJob = storedResume[job]
    for (let i = 0; i < currentJob.length; i++) {
        let currentInfo = currentJob[i]
        resumeLocation.innerHTML += `<article class="article">
        <p>${currentInfo.where}</p>
        <p>${currentInfo.years}</p>
        <p>${currentInfo.title}</p>
        `
    }
}
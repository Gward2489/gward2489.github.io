// Resume objects

let UNCW = {
    "where": "University of North Carolina at Wilmington",
    "years": "2008-2012",
    "title": "Bachealor of Arts in Environmental Studies"
}

let guitarCenter = {
    "where": "Guitar Center Nashville",
    "years": "2013-2017",
    "title": "Lead Guitar Tech"
}

let vendTu = {
    "where": "VendTu LLC",
    "years": "2012-2013",
    "title": "Internship for San Fransisco based digital advertising company."
}

let sja = {
    "where": "Southern Jewelry Associates",
    "years": "2012-Present",
    "title": "Web Strategist and Manager"
}

// Store resume objects as array into object

let resumeObj = {
    "jobs": [guitarCenter, sja, vendTu, UNCW]
}

// Store resume in local storage

let resume = JSON.stringify(resumeObj)
localStorage.setItem("resume", resume)
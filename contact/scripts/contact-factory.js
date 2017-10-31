// Objects with contact info

let facebookInfo = {
    "title": "Find me on Facebook",
    "link": "https://www.facebook.com/garrett.ward.5"
} 

let instagramInfo = {
    "title": "Find me on Instagram",
    "link": "https://www.instagram.com/garrettwardski/"
}

// Put objects into an array

let contactsArray = [facebookInfo, instagramInfo]

// Stringify array and store it in local storage

let contactsString = JSON.stringify(contactsArray)
localStorage.setItem("contacts", contactsString)
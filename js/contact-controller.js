// Retreive and parse contacts from local storage

let contacts = JSON.parse(localStorage.getItem("contacts"))

// Set location for html injection with variable

let contactsMarker = document.getElementById("contactId")

// Loop through the contacts array and print the contacts to the DOM

for (let i = 0; i < contacts.length; i++) {
    let currentContact = contacts[i]
    contactsMarker.innerHTML += `
    <article class="article">
    <p>${currentContact.title}<br>
    <a href="${currentContact.link}"> Click here</a>
    `
}